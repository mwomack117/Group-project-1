// JavaScript Document
// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyA-QfumrPujLAK_ZEySWiQjoLiIuPY3MQk",
//   authDomain: "group-project-1-1f7d8.firebaseapp.com",
//   databaseURL: "https://group-project-1-1f7d8.firebaseio.com",
//   projectId: "group-project-1-1f7d8",
//   storageBucket: "group-project-1-1f7d8.appspot.com",
//   messagingSenderId: "357236023309"
// };
// firebase.initializeApp(config);

// var database = firebase.database();

$(document).ready(function () {
  "use strict";

  // SIDE NAV
  //$('.sidenav').sidenav();

  // OnClick functions to search for recipes by category. Results are returned as images

  // Beef
  $("#beef").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save)

        /* ----- MODAL ----- */
        // create another ajax call to get more info from mealDb 
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#info").empty();

            // List Indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

            // Directions
            // var instructionText = $("#instructions");
            // instructionText.append(response.meals[0].strInstructions);

          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ------------------------------------------------ */

        $("#images").append(image);

      }
    });
  });

  //chicken
  $("#chicken").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#info").empty();

            // List indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  // Pork
  $("#pork").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=pork";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#info").empty();

            // List indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

          })
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  // Seafood
  $("#seafood").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#info").empty();

            // List indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  // Vegetarian
  $("#vegetarian").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#info").empty();

            // List indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  // Dessert
  $("#dessert").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=desert";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#info").empty();

            // List indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  // ----------------DRINKS  code BELOW---------------------------------- //

  // OnClick functions to search for drinks by category. Results are returned as images

  // Vodka
  $("#vodka").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#info").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            var instructionText = $("#instructions");
            instructionText.append(response.drinks[0].strInstructions);
          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  // Tequila
  $("#tequila").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#info").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            var instructionText = $("#instructions");
            instructionText.append(response.drinks[0].strInstructions);

          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  // Gin
  $("#gin").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);
        

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#info").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            var instructionText = $("#instructions");
            instructionText.append(response.drinks[0].strInstructions);
            
          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  // Rum
  $("#rum").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#info").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            var instructionText = $("#instructions");
            instructionText.append(response.drinks[0].strInstructions);

          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  // Non-Alcoholic
  $("#non-alc").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save)

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#info").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#info");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            var instructionText = $("#instructions");
            instructionText.append(response.drinks[0].strInstructions);

          });
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

});