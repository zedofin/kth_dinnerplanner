//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);
	var chosenDish = 100;
	// getting elements from html
	 this.numberOfGuests = container.find("#numberOfGuests");
	 this.starter = container.find("#starter");
	 this.mainDish = container.find("#mainDish");
	 this.dessert = container.find("#dessert");
	 this.starterPrice = container.find("#starterPrice");
	 this.mainDishPrice = container.find("#mainDishPrice");
	 this.dessertPrice = container.find("#dessertPrice");
	 this.dishName = container.find("#dishName");
	 this.dishImage = container.find("#dishImage");
	 this.dishPreparation = container.find("#dishPreparation");
	 this.dishIngredients = container.find("#dishIngredients");
	 // View 3
	 this.searchResults = container.find("#searchResults");

	 // View 5
	 this.myDinnerXPeople = container.find("#myDinnerXPeople");
	 this.starterImage = container.find("#starterImage");
	 this.mainImage = container.find("#mainImage");
	 this.dessertImage = container.find("#dessertImage");
	 this.totalPrice = container.find("#totalPrice");
	 this.starter5 = container.find("#starter5");
	 this.main5 = container.find("#main5");
	 this.dessert5 = container.find("#dessert5");
	 this.starterPrice5 = container.find("#starterPrice5");
	 this.mainPrice5 = container.find("#mainPrice5");
	 this.dessertPrice5 = container.find("#dessertPrice5");
	 // View 6
	 this.fullRecipe = container.find("#fullRecipe");
	 
	 // get things from model and put in html
	 this.starter.html(model.getDish(model.getSelectedDish("starter")).name);
	 this.mainDish.html(model.getDish(model.getSelectedDish("main dish")).name);
	 this.dessert.html(model.getDish(model.getSelectedDish("dessert")).name);
	 
	 this.starterPrice.html(model.getDishPrice("starter"));
	 this.mainDishPrice.html(model.getDishPrice("main dish"));
	 this.dessertPrice.html(model.getDishPrice("dessert"));

	 this.dishName.html(model.getDish(chosenDish).name);
	 this.dishImage.attr("src","images/"+model.getDish(chosenDish).image);
	 this.dishPreparation.html(model.getDish(chosenDish).description);
	 
	 var ings = model.getDish(chosenDish).ingredients;
	 var dishIngredientsHtml = "<table id=\"ingredientsTable\">";
	 for (i in ings){
	 	dishIngredientsHtml += "<tr><td>" + ings[i].quantity +" "+ ings[i].unit +"</td><td>"+ ings[i].name + "</td><td> SEK </td><td> " + ings[i].price +"</td></tr>";
	 }
	 dishIngredientsHtml += "</table>";
	 this.dishIngredients.html(dishIngredientsHtml);

	 this.plusButton = container.find("#plusGuest");
	 this.minusButton = container.find("#minusGuest");
	 model.setNumberOfGuests(this.numberOfGuests.attr("value"));
     container.find("#totalCost").html(model.getTotalMenuPrice()*this.numberOfGuests.attr("value"));
		$(this.numberOfGuests).on('input', function() { 
		    $("#totalCost").html($("#numberOfGuests").val()*model.getTotalMenuPrice());
		    $("#dishPeople").html("Ingredients for " + $("#numberOfGuests").val() + " people");
		});

	// View 3
	 var results = model.getFullMenu();
	 var searchResultsHtml = "<table id=\"searchResultsOuterTable\"><tr>";
	 for (i in results){
	 	searchResultsHtml += "<td><table id=\"searchResultsInnerTable\"><tr><td><img id=\"selectThisDish\" onClick=\"selectThisDish()\" src=\"images/" + results[i].image +"\" /></td></tr><tr><td>" + results[i].name +"</td></tr><tr><td>" + results[i].description +"</td></tr></table></td>";
	 }
	 searchResultsHtml += "</tr></table>";
	 this.searchResults.html(searchResultsHtml);


	// View 5
	this.myDinnerXPeople.html("My Dinner: " + this.numberOfGuests.attr("value"));

	this.starter5.html(model.getDish(model.getSelectedDish("starter")).name);
	this.main5.html(model.getDish(model.getSelectedDish("main dish")).name);
	this.dessert5.html(model.getDish(model.getSelectedDish("dessert")).name);
	 
	this.starterPrice5.html(model.getDishPrice("starter") + " SEK");
	this.mainPrice5.html(model.getDishPrice("main dish")+ " SEK");
	this.dessertPrice5.html(model.getDishPrice("dessert")+ " SEK");

	this.starterImage.attr("src","images/"+model.getDish(model.getSelectedDish("starter")).image);
	this.mainImage.attr("src","images/"+model.getDish(model.getSelectedDish("main dish")).image);
	this.dessertImage.attr("src","images/"+model.getDish(model.getSelectedDish("dessert")).image);

	this.totalPrice.html(model.getTotalMenuPrice() + " SEK");


	// View 6
	 var menu = model.getFullMenu();
	 var fullRecipeHtml = "<table>";
	 for (i in menu){
	 	fullRecipeHtml += "<tr><td><img src=\"images/" + menu[i].image +"\" /></td><td><h2>"+ menu[i].name +"</h2><p>"+ menu[i].description + "</p></td><td><h3>Preparation</h3><p>" + menu[i].description +"</p></td></tr>";
	 }
	 dishIngredientsHtml += "</table>";
	 this.fullRecipe.html(fullRecipeHtml);


	 
}
 
