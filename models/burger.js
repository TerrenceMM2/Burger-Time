var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (col, val, cb) {
        orm.create("burgers", col, val, function(res) {
            cb(res);
        });
    },
    update: function (col, val, cb) {
        orm.update("burgers", col, val, function (res) {
            cb(res);
        });
    },
};

module.exports = burger;