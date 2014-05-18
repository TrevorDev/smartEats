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
	
	var bread = new MealItem(0,"Strawberry Bread", [ new ingredientItem("Strawberries",2),new ingredientItem("flour",3.125),new ingredientItem("sugar",2),new ingredientItem("ground cinnamon",1),new ingredientItem("salt",1),new ingredientItem("baking soda",1),new ingredientItem("vegetable oil",1.25),new ingredientItem("eggs",4),new ingredientItem("pecans",1.25) ], "../public/custom/img/bread.jpg");
	
	var taco = new MealItem(1,"Lime Chicken Soft Tacos", [ new ingredientItem("boneless chicken",1.5),new ingredientItem("red wine vinegar",1.125),new ingredientItem("lime",0.5),new ingredientItem("sugar",1),new ingredientItem("salt",1),new ingredientItem("black pepper",1),new ingredientItem("green onion",2),new ingredientItem("garlic",1),new ingredientItem("oregano",1),new ingredientItem("flout tortilla",6),new ingredientItem("tomato",1),new ingredientItem("lettuce",0.25),new ingredientItem("Monterey Jack Cheese",0.25),new ingredientItem("salsa",1) ], "../public/custom/img/taco.jpg"	);
	
	var chicken = new MealItem(2,"Asparagus, Chicken, and Pecan Pasta", [ new ingredientItem("Penne pasta",1),new ingredientItem("olive oil",1),new ingredientItem("garlic",1), new ingredientItem("red bell pepper",1), new ingredientItem("Asparagus",2), new ingredientItem("chicken breast",1), new ingredientItem("butter",3) ], "../public/custom/img/pasta.jpg");
	
	var shrimp = new MealItem(3,"Grilled Shrimp Caprese", [ new ingredientItem("basil",20),new ingredientItem("olive oli",2), new ingredientItem("garlic",1),new ingredientItem("shrimp",1),new ingredientItem("angel hair pasta",1), new ingredientItem("butter",2),new ingredientItem("white wine",0.5) ], "../public/custom/img/shrimp.jpg");
	
	var cream = new MealItem(4,"Tomato Cream Sausce for Pasta", [ new ingredientItem("olive oil",2),new ingredientItem("onion",1), new ingredientItem("garlic",1), new ingredientItem("tomato",1),new ingredientItem("basil",1),new ingredientItem("sugar",0.75),new ingredientItem("butter",1) ], "../public/custom/img/tomatocream.jpg");
	
	var easter = new MealItem(5,"Easter breakfast casserole", [ new ingredientItem("bacon",1),new ingredientItem("onion",0.25),new ingredientItem("green bell pepper",0.25), new ingredientItem("cheddar cheese",3),new ingredientItem("eggs",8),new ingredientItem("milk",2),new ingredientItem("hash brown potatoes",1) ], "../public/custom/img/easter.jpg");
	
	
	Meals = [bread,taco,chicken,shrimp,cream,easter];
	
	return Meals;
}