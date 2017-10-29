var animals = ["Cat", "Dog", "Sloth", "Cheeta"];

function displayAnimalInfo() {

    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=t0rxNcxDfR0NZd4DvNKSHuG1owmDoQzY&q=" + animal + "&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
    	$("#animalImg").empty();
        for (var i = 0; i < response.data.length; i++) {


            var animalDiv = $("<div class='animal'>");

            var rating = response.data[i].rating;

            var pOne = $("<p>").text("Rating: " + rating);

            animalDiv.append(pOne);

            var imgURL = response.data[i].images.original.url;

            var image = $("<img>").attr("src", imgURL);
        
        $("#animalImg").append(animalDiv, image);
		 } 
    });

}

function renderButtons() {

    $("#animal-btn").empty();

    for (var i = 0; i < animals.length; i++) {

        var a = $("<button>");
        a.addClass("animal btn btn-primary btn-lg");
        a.css("margin", "10px");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#animal-btn").append(a);
    }
}

$("#add-animal").on("click", function(event) {
    event.preventDefault();
    var animal = $("#animal-input").val().trim();
    console.log(animal);
    animals.push(animal);
    console.log(animals);
    renderButtons();
});

$(document).on("click", ".animal", displayAnimalInfo);

renderButtons();
console.log(animals);