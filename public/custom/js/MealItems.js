function MealItem(id,Title, ingredients,image){
	
	this.id = id;
	this.Title = Title;
	this.ingredients = ingredients;
	this.image = image;
}
function ingredientItem(name,amount){
	this.name = name;
	this.amount = amount;
}


function populateMealList(){
	var Meals=[];
	
	
	var Tacos = new mealItem(1,"Lime Chicken Soft Tacos", [ new ingredientItem("",), ], "");
	
	Meals.push(Rosee);
	
	return Meals;
}