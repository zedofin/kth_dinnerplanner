//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)


	var chosenDish = 100;

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
	 var dishIngredientsHtml = "<table>";
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



	 
}
 
