class TipDAO {
    constructor(app) {
        this._app = app;
    }

    findAll(callback) {
        let conn = this._app.db.connection();
        conn.query("SELECT * FROM tip WHERE active = true", callback);
        conn.end();
    }

    findById(id, callback) {
        let conn = this._app.db.connection();
        conn.query("SELECT * FROM tip WHERE id = ? AND active = true", id, callback);
        conn.end();
    }

    save(tip, callback) {
        let conn = this._app.db.connection();
        conn.query("INSERT INTO tip SET ?", tip, callback);
        conn.end();
    }

    update(id, tip, callback) {
        let conn = this._app.db.connection();
        conn.query("UPDATE tip SET ? WHERE id = ?", [tip, id], callback);
        conn.end();
    }

    delete(id, callback) {
        let conn = this._app.db.connection();
        conn.query("UPDATE tip SET active = false WHERE id = ?", id, callback);
        conn.end();
    }
}

module.exports = () => {
    return TipDAO;
}