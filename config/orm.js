var connection = require("./connection");

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
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
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition + ";";

        console.log("table ", typeof table, table)
        console.log("objColVals ", typeof objColVals, objColVals)
        console.log("condition ", typeof condition, condition)

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;