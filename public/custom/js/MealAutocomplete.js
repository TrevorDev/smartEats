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

  function getURLParameter(name) {
    var ret = decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
    return ret == "null" ? null : ret;
  }

  //console.log(getURLParameter("items").split(","))

  //console.log(window.location.pathname.split('?')[1]));

});