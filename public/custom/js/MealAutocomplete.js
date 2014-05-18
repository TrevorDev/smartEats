$(function(){
	
	console.log( "ready!" );
	//=================declare page elements========================
	var meals = populateMealList();	
	var userChosenMeals=[];
	var mealsAdded=0;
	
	//=============prototype functions==============================
	function RemoveMealElement(mealListItem){
		console.log( "removed!"+ mealListItem);
	}
  
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
				
								
				var mealElement = jQuery('<li></li>', {
					class: 'ac_even',	
					id: mealsAdded
				});
				
				jQuery('<img/>',{
					src:meals[i].image,
				}).appendTo(mealElement);
				jQuery('<span></span>',{
					text:meals[i].Title,
					class:'title',
					style:'font-weight:bold'
				}).appendTo(mealElement);
				jQuery('<input />',{
					value:'x',
					class:'xbutton',
					type: 'button'
				}).on({
					click:function(){
					
						
						var parent = $(this).parent().hide();
						if (userChosenMeals.length > -1) {
							userChosenMeals.splice(parent.attr('id'),1);
						}
							console.log('removed'+userChosenMeals);
						
						}
					}).appendTo(mealElement);
				
				var uListMeals = $("#SelectedMeals").append(mealElement);
				
				mealsAdded++;
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