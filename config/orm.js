var connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function (table, col, val, cb) {
        var queryString = "INSERT INTO " + table + " (" + col.toString() + ") VALUES (?);";
        console.log("table ", typeof table, table)
        console.log("col ", typeof col, col)
        console.log("val ", typeof val, val)

        console.log(queryString);

        connection.query(queryString, val, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function (table, col, val, cb) {
        var queryString = "UPDATE " + table + " SET " + col + " WHERE id=" + val + ";";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;