$(function(){
	
	console.log( "ready!" );
	//=================declare page elements========================
	
	
	//=============prototype functions==============================
	//handle adding a meal
	$("#addMealButton").click(function(mealItem){
    console.log( "Meal Added!" );
  });

  $("#checkout").click(function(){
    var testIds = [1,2,3,5]
    window.location="/order?items="+encodeURIComponent(testIds)
    return false
  })

  

  console.log(getURLParameter("items").split(","))

});