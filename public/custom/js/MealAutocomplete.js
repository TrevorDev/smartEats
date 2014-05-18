$(function(){
	
	console.log( "ready!" );
	//=================declare page elements========================
	var meals = populateMealList();	
	var userChosenMeals=[];
	
	//=============prototype functions==============================
	//handle adding a meal
	$("#addMeal_button").click(function(mealItem){
		
		//get text input
		var mealInputString = $("#s").val();
		
		//clear field
		$("#s").val('');
		
		var found =0;
		for(var i=0; i<meals.length;i++){
			if(mealInputString === meals[i].Title){
				userChosenMeals.push(i);
				found =1;
				
				var mealElement = '<li class="ac_even"><a href="index.html"><img src='+ meals[i].image+'><span class="title"><strong>'+meals[i].Title+'</strong>s</span></a></li>'
			
				var uListMeals = $("#SelectedMeals").append(mealElement);
				
				
				break;
			}
		}
		
		//handle the case of invalid input
		if(found===0){
		
		}
		else{
			
			
		
		}
			
		console.log( "Meal Added!" );
  });

  $("#checkout").click(function(){
    
    window.location="/order?items="+encodeURIComponent(userChosenMeals);
    return false;
  });
 
});