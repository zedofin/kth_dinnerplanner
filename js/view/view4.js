var View4 = function (container, model) {	

	var chosenDish = model.getShowDish();

 	 this.dishPeople = container.find("#dishPeople");
 	 this.dishName = container.find("#dishName");
	 this.dishImage = container.find("#dishImage");
	 this.dishPreparation = container.find("#dishPreparation");
	 this.dishIngredients = container.find("#dishIngredients");
	 this.confirmDish = container.find("#confirmDish");
	 this.backToSelectDish = container.find("#backToSelectDish");
	 this.confirmDish = container.find("#confirmDish");

	 // Dish name, image, preparation
	 this.dishName.html(model.getDish(chosenDish).name);
	 this.dishImage.attr("src","images/"+model.getDish(chosenDish).image);
	 this.dishImage.attr("id",model.getDish(chosenDish).id);
	 this.dishPreparation.html(model.getDish(chosenDish).description);




	 // Dish ingredients
	 //var ings = model.getDish(chosenDish).ingredients;
	 model.getDishIngredients(id, function(ings){

		var dishIngredientsHtml = "<table id=\"ingredientsTable\">";
		for (i in ings){
			ings[i].price = "3";
			dishIngredientsHtml += "<tr><td>" + ings[i].amount +" "+ ings[i].unit +"</td><td>"+ ings[i].name + "</td><td> SEK </td><td> " + ings[i].price +"</td></tr>";
		}
		dishIngredientsHtml += "</table>";
		this.dishIngredients.html(dishIngredientsHtml);

	 });
	 
	model.addObserver(this);
	 this.update = function(obj){

	 // Ingredients: Amount of people
	 this.dishPeople.innerHtml = model.getNumberOfGuests();

	 var chosenDish = model.getShowDish();
	 this.dishName.html(model.getDish(chosenDish).name);
	 this.dishImage.attr("src","images/"+model.getDish(chosenDish).image);
	 this.dishImage.attr("id",model.getDish(chosenDish).id);
	 this.dishPreparation.html(model.getDish(chosenDish).description);
	 	 var ings = model.getDish(chosenDish).ingredients;
	 var dishIngredientsHtml = "<table id=\"ingredientsTable\">";
	 for (i in ings){
	 	dishIngredientsHtml += "<tr><td>" + ings[i].quantity +" "+ ings[i].unit +"</td><td>"+ ings[i].name + "</td><td> SEK </td><td> " + ings[i].price +"</td></tr>";
	 }
	 dishIngredientsHtml += "</table>";
	 this.dishIngredients.html(dishIngredientsHtml);

	 	
	 }


}