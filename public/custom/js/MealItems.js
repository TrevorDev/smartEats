function MealItem(id,Title, ingredients,image){
	
	this.id = id;
	this.Title = Title;
	this.ingredients = ingredients;
	this.image = image;
	this.clone = function(){
		var newIngredients = $.map(this.ingredients, function(x){
			return x.clone()
		})
		return new MealItem(this.id,this.Title,newIngredients,this.image)
	}
	this.getPrice = function(){
		var total = 0;
		for(var i = 0;i<this.ingredients.length;i++){
			total+= this.ingredients[i].price
		}
		return parseInt(total*100)/100
	}
}
function ingredientItem(name,amount, price){
	this.name = name;
	this.amount = amount;
	this.price = price
	if(!this.price){
		this.price = 0.99
	}
	this.clone = function(){
		return new ingredientItem(this.name, this.amount, this.price)
	}
}


function populateMealList(){
	var Meals=[];
	
	var bread = new MealItem(0,"Strawberry Bread", [ new ingredientItem("Strawberries",2, 0.99),new ingredientItem("flour",3.125, 2.61),new ingredientItem("sugar",2,1.54),new ingredientItem("ground cinnamon",1,1.22),new ingredientItem("salt",0.53),new ingredientItem("baking soda",1,0.32),new ingredientItem("vegetable oil",1.25,0.33),new ingredientItem("eggs",4,0.63),new ingredientItem("pecans",1.25,0.31) ], "../public/custom/img/bread.jpg");
	
	var taco = new MealItem(1,"Lime Chicken Soft Tacos", [ new ingredientItem("boneless chicken",1.5, 0.23),new ingredientItem("red wine vinegar",1.125,0.54),new ingredientItem("lime",0.5,0.11),new ingredientItem("sugar",1,0.32),new ingredientItem("salt",1,0.87),new ingredientItem("black pepper",1,0.43),new ingredientItem("green onion",2, 0.67),new ingredientItem("garlic",1,0.31),new ingredientItem("oregano",1),new ingredientItem("flout tortilla",6),new ingredientItem("tomato",1),new ingredientItem("lettuce",0.25),new ingredientItem("Monterey Jack Cheese",0.25),new ingredientItem("salsa",1) ], "../public/custom/img/taco.jpg"	);
	
	var chicken = new MealItem(2,"Asparagus, Chicken, and Pecan Pasta", [ new ingredientItem("Penne pasta",1),new ingredientItem("olive oil",1),new ingredientItem("garlic",1), new ingredientItem("red bell pepper",1), new ingredientItem("Asparagus",2), new ingredientItem("chicken breast",1), new ingredientItem("butter",3) ], "../public/custom/img/pasta.jpg");
	
	var shrimp = new MealItem(3,"Grilled Shrimp Caprese", [ new ingredientItem("basil",20),new ingredientItem("olive oli",2), new ingredientItem("garlic",1),new ingredientItem("shrimp",1),new ingredientItem("angel hair pasta",1), new ingredientItem("butter",2),new ingredientItem("white wine",0.5) ], "../public/custom/img/shrimp.jpg");
	
	var cream = new MealItem(4,"Tomato Cream Sausce for Pasta", [ new ingredientItem("olive oil",2, 1.22),new ingredientItem("onion",1,1.76), new ingredientItem("garlic",1, 0.33), new ingredientItem("tomato",1, 0.35),new ingredientItem("basil",1,0.54),new ingredientItem("sugar",0.75,0.11),new ingredientItem("butter",1,1.15) ], "../public/custom/img/tomatocream.jpg");
	
	var easter = new MealItem(5,"Easter breakfast casserole", [ new ingredientItem("bacon",1),new ingredientItem("onion",0.25, 0.65),new ingredientItem("green bell pepper",0.25,0.87), new ingredientItem("cheddar cheese",3,0.12),new ingredientItem("eggs",8,1.64),new ingredientItem("milk",2,2.22),new ingredientItem("hash brown potatoes",1,2.22) ], "../public/custom/img/easter.jpg");
	
	
	Meals = [bread,taco,chicken,shrimp,cream,easter];
	
	return Meals;
}