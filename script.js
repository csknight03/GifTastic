
var animals = ["Cat", "Dog", "Sloth", "Cheeta"];

function displayAnimalInfo() {

	var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=t0rxNcxDfR0NZd4DvNKSHuG1owmDoQzY&q="+ animal +"&limit=25&offset=0&rating=G&lang=en";

    // Creating an AJAX call for the specific animal button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {

        // Creating a div to hold the animal
        var animalDiv = $("<div class='animal'>");

        // Storing the rating data
        var rating = response.data.rating;

        // Creating an element to have the rating displayed
        var pOne = $("<p>").text("Rating: " + rating);

        // Displaying the rating
        animalDiv.append(pOne);

        var imgURL = response.data.images.url;

        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);

        // Appending the image
        animalDiv.append(image);

        $("#animalImg").append(animalDiv);
    });

}

// Function for displaying animal data
function renderButtons() {

    $("#animal-btn").empty();

    // Looping through the array of animals
    for (var i = 0; i < animals.length; i++) {

        var a = $("<button>");
        // Adding a class of animal to our button
        a.addClass("animal btn btn-primary btn-lg");

        a.css("margin", "10px");
        // Adding a data-attribute
        a.attr("data-name", animals[i]);
        // Providing the initial button text
        a.text(animals[i]);
        // Adding the button to the animal-view div
        $("#animal-btn").append(a);
    }
}

// This function handles events where a animal button is clicked
$("#add-animal").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var animal = $("#animal-input").val().trim();
    console.log(animal);
    // Adding animal from the textbox to our array
    animals.push(animal);
    console.log(animals);
    // Calling renderButtons which handles the processing of our animals array
    renderButtons();
});

// Adding a click event listener to all elements with a class of "animal"
$(document).on("click", ".animal", displayAnimalInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
console.log(animals);

