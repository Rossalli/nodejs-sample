const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const consign = require("consign");
const jwt = require("jsonwebtoken");
const cors = require('cors')

require("dotenv").load();

const port = process.env.APP_PORT;

let http = require("http").Server(app);
const io = require("socket.io")(http);
app.set("io", io);

app.set("jwt", jwt);


app.use(bodyParser.json(), cors());

module.exports = (app) => {
    app.use("*", (req, resp, next) => {
        if (req.originalUrl == "/login") {
            next();
        } else {
            const token = req.headers['x-access-token'] || req.query.accessToken;
            if (!token) {
                resp.status(401).end();
            } else {
                jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
                    if (err) {
                        resp.status(401).end();
                    } else {
                        req.user = decoded.user;
                        next();
                    }
                })
            }
        }
    });
}

consign({ cwd: 'src' })
    .include("routes")
    .then("db")
    .then("dao")
    .into(app);

app.get("/", (req, res) => { });

app.get("/health", (req, res) => res.json({ status: "OK" }));

http.listen(port, () => console.log(`App listening on port ${port}!`));
