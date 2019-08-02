$(document).ready(function () {

    $("#submit-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = $("#textbox").val().trim();

        $.post("/api/burgers", {burger: newBurger}).then(function(result) {
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
            // playAudio("bite");
            // $.ajax({
            //     "url": "/",
            //     "method": "GET"
            // });
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
            // playAudio("cook");
            // $.ajax({
            //     "url": "/",
            //     "method": "GET"
            // });
            location.reload();
        });
    });

    function playAudio(param){
        var audio = document.getElementById(param);
        console.log(audio);
        audio.currentTime = 0;
        audio.play();
    };
});