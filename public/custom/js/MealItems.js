function MealItem(id,Title, ingredients,image){
	
	this.id = id;
	this.Title = Title;
	this.ingredients = ingredients;
	this.image = image;
}



function populateMealList(){
	var Meals=[];
	
	var Rosee = new mealItem(1,"Rosee Pasta", ["pasta", "pastaSause"], "http://someurl");
	
	Meals.add(Rosee);
	
	return Meals;
}