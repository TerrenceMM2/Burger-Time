var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            res.render("index", dbBurger);
        });
    });

    // app.get("/", function(req, res) {
    //     // findAll returns all entries for a table when used with no options
    //     db.Burger.findAll({}).then(function(dbBurger) {
    //       // We have access to the todos as an argument inside of the callback function
    //       res.json(dbBurger);
    //     });
    //   });

    // Get route to retrieve all results and send to index Handlebars file.
    // router.get("/", function(req, res) {
    //     burger.all(function(data) {
    //         var burger = {
    //             burgers: data
    //         };
    //         res.render("index", burger);
    //     });
    // });

    // Post route. Sends 200 status and results.
    // router.post("/api/burgers", function(req, res) {
    //     burger.create(["burger_name"], [req.body.burger], function(result) {
    //         res.json({
    //             status: 200,
    //             message: "Burger added!",
    //             data: result,
    //         })
    //     });
    // });

    // Put (update) route based on id
    // router.put("/api/burgers/:id", function(req, res) {
    //     var condition = "id = " + req.params.id;
    //     var eaten;

    //     if (req.body.eaten === "1") {
    //         eaten = false;
    //     } else {
    //         eaten = true;
    //     }

    //     burger.update({devoured: eaten}, condition, function(result) {
    //         if (result.changeRows === 0) {
    //             return res.status(404).end();
    //         } else {
    //             res.status(200).end();
    //         };
    //     });
    // });

};