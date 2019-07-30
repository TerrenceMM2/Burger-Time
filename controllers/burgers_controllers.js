var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burger = {
            burgers: data
        };
        console.log(burger);
        res.render("index", burger);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(req.body.burger, function(result) {
        res.json({ id: result});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    cat.update({id: req.body.id}, function(result) {
        if (result.changeRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;