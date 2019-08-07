var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Burger.findAll({
            include: [db.Customer]
        }).then(function (result) {
            res.render("index", {
                burger: result
            });
        }).catch(function (err) {
            res.status(500).json(err);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger
        }).then(function (result) {
            res.status(201).render("index", result);
        }).catch(function (err) {
            res.status(500).json(err);
        });
    });

    app.put("/api/burgers/:id", function (req, res) {

        if (req.body.eaten) {
            eaten = false;
        } else {
            eaten = true;
        }

        db.Customer.create({
            customer_name: req.body.customer
        }).then(function (result) {
            db.Burger.update({
                devoured: eaten,
                updatedAt: Date.now(),
                CustomerId: result.id
            }, {
                where: {
                    id: req.params.id
                }
            })
        }).then(function (result) {
            res.status(201).render("index", result);
        }).catch(function (err) {
            res.status(500).json(err);
        });
    });

};