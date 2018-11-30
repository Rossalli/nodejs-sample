module.exports = (app) => {


    //get all users
    app.get("/users", (req, res) => {
        let dao = new app.dao.UserDAO(app);
        dao.findAll((err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.json(result);
            }
        })
    });

    //get user by id
    app.get("/users/:id", (req, res) => {
        let dao = new app.dao.UserDAO(app);
        let id = req.params.id;

        dao.findById(id, (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                if (result.length > 0) {
                    res.json(result);
                } else {
                    res.status(404).end();
                }

            }
        });
    });

    //create a user
    app.post("/users", (req, res) => {
        let user = {
            name: req.body.name,
            login: req.body.login,
            password: req.body.password,
        };

        let dao = new app.dao.UserDAO(app);
        dao.save(user, (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.status(201).end();
            }
        })
    });

    //update user
    app.put("/users/:id", (req, res) => {
        let id = req.params.id
        let user = {
            id: req.params.id,
            name: req.body.name,
            login: req.body.login,
            password: req.body.password,
        };

        let dao = new app.dao.UserDAO(app);
        dao.update(id, user, (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.status(204).end();
            }
        })
    });

    //delete user
    app.delete("/users/:id", (req, res) => {
        let id = req.params.id;
        let dao = new app.dao.UserDAO(app);
        dao.delete(id, (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.status(204).end();
            }
        })
    });

}