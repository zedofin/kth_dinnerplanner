var View4 = function (container, model) {	

	var chosenDish = 100;





 	 this.dishName = container.find("#dishName");
	 this.dishImage = container.find("#dishImage");
	 this.dishPreparation = container.find("#dishPreparation");
	 this.dishIngredients = container.find("#dishIngredients");
	 this.confirmDish = container.find("#confirmDish");

	 // Dish name, image, preparation
	 this.dishName.html(model.getDish(chosenDish).name);
	 this.dishImage.attr("src","images/"+model.getDish(chosenDish).image);
	 this.dishPreparation.html(model.getDish(chosenDish).description);

	 // Ingredients: Amount of people
	 $(this.numberOfGuests).on('input', function() { 
		$("#totalCost").html($("#numberOfGuests").val()*model.getTotalMenuPrice());
		$("#dishPeople").html("Ingredients for " + $("#numberOfGuests").val() + " people");
	 });


	 // Dish ingredients
	 var ings = model.getDish(chosenDish).ingredients;
	 var dishIngredientsHtml = "<table id=\"ingredientsTable\">";
	 for (i in ings){
	 	dishIngredientsHtml += "<tr><td>" + ings[i].quantity +" "+ ings[i].unit +"</td><td>"+ ings[i].name + "</td><td> SEK </td><td> " + ings[i].price +"</td></tr>";
	 }
	 dishIngredientsHtml += "</table>";
	 this.dishIngredients.html(dishIngredientsHtml);

}