var orm = require("../config/orm");

var burger = {
    // Calls orm all function and passes table to be referenced.
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // Calls orm create function and passes table to be referenced.
    create: function (col, val, cb) {
        orm.create("burgers", col, val, function(res) {
            cb(res);
        });
    },
    // Calls orm update function and passes table to be referenced.
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
};

module.exports = burger;