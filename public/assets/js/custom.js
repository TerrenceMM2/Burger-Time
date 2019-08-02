$(document).ready(function () {

    $("#submit-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = $("#textbox").val().trim();

        $.post("/api/burgers", {burger: newBurger}).then(function(result) {
            console.log(result);
            location.reload();
        });
    });

    $(".eat").on("click", function(event) {
        event.preventDefault();

        var burgerId = $(this).attr("data-id");

        $.ajax({
            "url": "/api/burgers/" + burgerId,
            "method": "PUT"
        }).then(function(result) {
            console.log(result);
            location.reload();
        });
    });

    $(".make").on("click", function(event) {
        event.preventDefault();

        var burgerId = $(this).attr("data-id");
        var burgerEaten = $(this).attr("data-eaten");

        $.ajax({
            "url": "/api/burgers/" + burgerId,
            "method": "PUT",
            "data": {
                "eaten": burgerEaten
            }
        }).then(function(result) {
            console.log(result);
            location.reload();
        });
    });
});