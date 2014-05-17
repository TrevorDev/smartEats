$(function(){
	
	console.log( "ready!" );
	//=================declare page elements========================
	//add meal button
	var addMealButton =	document.getElementById("addMeal_button");
	
	//=============prototype functions==============================
	//handle adding a meal
	function addMeal(mealItem){
		
		console.log( "Meal Added!" );
	};
	
	
	//add handler for button click.onclick = doFunction;
	//- Using and anonymous function:
	addMealButton.onclick = addMeal;

});