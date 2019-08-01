$(document).ready(function () {

    $("#submit-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = $("#textbox").val().trim();

        $.post("/api/burgers", {burger: newBurger}).then(function() {
            console.log(result);
        });
    });
});