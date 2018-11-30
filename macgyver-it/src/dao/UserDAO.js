class UserDAO {
    constructor(app) {
        this._app = app;
    }

    findAll(callback) {
        let conn = this._app.db.connection();
        conn.query("SELECT * FROM user WHERE active = true", callback);
        conn.end();
    }

    findById(id, callback) {
        let conn = this._app.db.connection();
        conn.query("SELECT * FROM user WHERE id = ? AND active = true", id, callback);
        conn.end();
    }

    findByLoginAndPassword(login, password, callback) {
        let conn = this._app.db.connection();
        conn.query("SELECT * FROM user WHERE login = ? AND password = ? AND active = true", [login, password], callback);
        conn.end();
    }
    save(user, callback) {
        let conn = this._app.db.connection();
        conn.query("INSERT INTO user SET ?", user, callback);
        conn.end();
    }

    update(id, user, callback) {
        let conn = this._app.db.connection();
        conn.query("UPDATE user SET ? WHERE id = ?", [user, id], callback);
        conn.end();
    }

    delete(id, callback) {
        let conn = this._app.db.connection();
        conn.query("UPDATE user SET active = false WHERE id = ?", id, callback);
        conn.end();
    }
}

module.exports = () => {
    return UserDAO;
}