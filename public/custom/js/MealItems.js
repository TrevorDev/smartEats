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
	
	
	var Tacos = new mealItem(1,"Lime Chicken Soft Tacos", [ new ingredientItem("",), ], "../public/custom/img/taco.jpg");
	var Tacos = new mealItem(2,"Asparagus, Chicken, and Pecan Pasta", [ new ingredientItem("",), ], "../public/custom/img/pasta.jpg");
	var Tacos = new mealItem(3,"Grilled Shrimp Caprese", [ new ingredientItem("",), ], "../public/custom/img/shrimp.jpg");
	var Tacos = new mealItem(4,"Tomato Cream Sausce for Pasta", [ new ingredientItem("",), ], "../public/custom/img/tomatocream.jpg");
	var Tacos = new mealItem(5,"Easter breakfast casserole", [ new ingredientItem("",), ], "../public/custom/img/easter.jpg");
	var Tacos = new mealItem(6,"Strawberry Bread", [ new ingredientItem("",), ], "../public/custom/img/bread.jpg");
	
	Meals.push(Rosee);
	
	return Meals;
}