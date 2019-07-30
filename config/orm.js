var connection = require("./connection");

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                return res.status(500).end();
            };
            cb(result);
        });
    },
    create: function (table, col, val, cb) {
        var queryString = "INSERT INTO " + table + "SET " + col + " = " + val + ";";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                return res.status(500).end();
            };
            cb(result);
        });
    },
    update: function (table, col, val, cb) {
        var queryString = "UPDATE " + table + " SET " + col + " WHERE id=" + val + ";";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                return res.status(500).end();
            } else if (result.changedRows === 0) {
                return res.status(404).end();
            };
            cb(result);
            res.status(200).end();
        });
    }
};

module.exports = orm;