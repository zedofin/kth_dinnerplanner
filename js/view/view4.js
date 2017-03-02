var View4 = function (container, model) {	

	var chosenDish = model.getShowDish();

	this.dishType = container.find("#dishType");
 	this.dishPeople = container.find("#dishPeople");
 	this.dishName = container.find("#dishName");
	this.dishImage = container.find("#dishImage");
	this.dishPreparation = container.find("#dishPreparation");
	this.dishIngredients = container.find("#dishIngredients");
	this.confirmDish = container.find("#confirmDish");
	this.backToSelectDish = container.find("#backToSelectDish");




	 
	model.addObserver(this);
	this.update = function(obj){

		model.getDish(model.getShowDish()[0], function(data){

			// Ingredients: Amount of people
			this.dishPeople.innerHtml = model.getNumberOfGuests();

		 	// Dish name, image, preparation
			var chosenDish = model.getShowDish()[0];
			container.find("#dishName").html(data.title);
			container.find("#dishPreparation").html(data.description);
			container.find("[class=dishImage]").attr("id",data.id);
			container.find("[class=dishImage]").attr("src",data.image);
			container.find("[class=dishImage]").attr("width","400px");
			var ings = data.extendedIngredients;
			var dishIngredientsHtml = "<table id=\"ingredientsTable\">";
			for (i in ings){
				dishIngredientsHtml += "<tr><td>" + ings[i].amount +" "+ ings[i].unit +"</td><td>"+ ings[i].name + "</td><td> SEK </td><td> " + ings[i].amount +"</td></tr>";
			}
			dishIngredientsHtml += "</table>";
			container.find("#dishIngredients").html(dishIngredientsHtml);



			/*
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

			*/
		});
	}
}