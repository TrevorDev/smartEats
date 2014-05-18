$(function(){
	
	console.log( "ready!" );
	//=================declare page elements========================
	var meals = populateMealList();	
	var userChosenMeals=[1,2,3,5];
	
	//=============prototype functions==============================
	//handle adding a meal
	$("#addMeal_button").click(function(mealItem){
		
		//get text input
		var mealInputString = $("#s").val();
		
		var found =0;
		for(var i=0; i<meals.length;i++){
			if(mealInputString === meals[i].Title){
				userChosenMeals.push(i);
				found =1;
				break;
			}
		}
		
		//handle the case of invalid input
		if(found===0){
		
		}
		
	
		console.log( "Meal Added!" );
  });

  $("#checkout").click(function(){
    
    window.location="/order?items="+encodeURIComponent(userChosenMeals);
    return false;
  });
 
});