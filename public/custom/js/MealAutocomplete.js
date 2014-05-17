$(function(){
	
	console.log( "ready!" );
	//=================declare page elements========================
	//add meal button
	var addMealButton =	document.getElementById("addMeal_button");
	
	var availableTags = [
      "<b>ActionScript</b>",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#mealInput" ).autocomplete({
      source: availableTags
    });
	
	//=============prototype functions==============================
	//handle adding a meal
	function addMeal(mealItem){
		
		console.log( "Meal Added!" );
	};
	
	
	//add handler for button click.onclick = doFunction;
	//- Using and anonymous function:
	addMealButton.onclick = addMeal;

});