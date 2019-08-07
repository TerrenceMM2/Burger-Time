var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (result) {
            console.log({
                burger: result
            });
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
            console.log(result);
            res.status(201).render("index", result);
        }).catch(function (err) {
            res.status(500).json(err);
            console.log(err)
        });
    });

    // app.put("/api/burgers/:id", function (req, res) {

    //     console.log("req.body.eaten, ", req.body.eaten);

    //     if (req.body.eaten) {
    //         eaten = false;
    //     } else {
    //         eaten = true;
    //     }

    //     console.log("eaten variable, ", eaten)

    //     db.Burger.update({
    //         devoured: eaten,
    //         updatedAt: Date.now()
    //     }, {
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (result) {
    //         res.status(201).render("index", result);
    //     }).catch(function (err) {
    //         res.status(500).json(err);
    //     });
    // });

};