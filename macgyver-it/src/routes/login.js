module.exports = (app) => {

    app.post("/login", (req, res) => {
        let login = req.body.login;
        let password = req.body.password;

        if (!login || !password) {
            res.status(400).json({error: "Invalid username or password"});
        } else {
            let dao = new app.dao.UserDAO(app);
            dao.findByLoginAndPassword(login, password, (err, result) => {
                if (err) {
                    res.status(500).json(err);
                } else if (!result || result.length <= 0) {
                    res.status(403).end();
                } else {
                    const payload = {user: result[0]};
                    const jwt = app.get('jwt');
                    const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: 60 * 60 * 24});
                    res.status(200).json({access_token: token});
                }
            })
        }
    });
}