module.exports = (app) => {

    //get all tips
    app.get("/tips", (req, res) => {
        let dao = new app.dao.TipDAO(app);
        dao.findAll((err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.json(result);
            }
        })
    });

    //get tip by id
    app.get("/tips/:id", (req, res) => {
        let dao = new app.dao.TipDAO(app);
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

    //create a tip
    app.post("/tips", (req, res) => {
        let tip = {
            name: req.body.name,
            description: req.body.description,
            link: req.body.link,
            category: req.body.category
        };

        let dao = new app.dao.TipDAO(app);
        dao.save(tip, (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.status(201).end();
            }
        })
    });

    //update tip
    app.put("/tips/:id", (req, res) => {
        let id = req.params.id
        let tip = {
            id: req.params.id,
            name: req.body.name,
            description: req.body.description,
            link: req.body.link,
            category: req.body.category
        };

        let dao = new app.dao.TipDAO(app);
        dao.update(id, tip, (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.status(204).end();
            }
        })
    });

    //delete tip
    app.delete("/tips/:id", (req, res) => {
        let id = req.params.id;
        let dao = new app.dao.TipDAO(app);
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