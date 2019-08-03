var connection = require("./connection");

// Function to turn object to a string
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
    // MySQL Select from table
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // MySQL Insert Into table. Single Entry.
    create: function (table, col, val, cb) {
        var queryString = "INSERT INTO " + table + " (" + col.toString() + ") VALUES (?);";

        connection.query(queryString, val, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // MySQL Update based on id.
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition + ";";

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;