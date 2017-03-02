var View5 = function (container, model) {

	 // View 5
	 this.myDinnerXPeople = container.find("#numberOfPeople");

	 this.starter5 = container.find("#starter5");
	 this.starterPrice5 = container.find("#starterPrice5");
	 this.starterImage = container.find("#starterImage");
	 this.main5 = container.find("#main5");
	 this.mainPrice5 = container.find("#mainPrice5");
	 this.mainImage = container.find("#mainImage");
	 this.dessert5 = container.find("#dessert5");
	 this.dessertPrice5 = container.find("#dessertPrice5");
	 this.dessertImage = container.find("#dessertImage");

	 this.totalPrice = container.find("#totalPrice");
	 this.goBackAndEditDinner = container.find("#goBackAndEditDinner");
	 this.printFullRecipe = container.find("#printFullRecipe");

	// View 5



	model.addObserver(this);
	 this.update = function(obj){


		this.starter5.html("You have no starter");
		this.starterPrice5.html("");
		this.starterImage.attr("src","/images/loading.gif");

		this.main5.html("You have no main dish");
		this.mainPrice5.html("");
		this.mainImage.attr("src","/images/loading.gif");

		this.dessert5.html("You have no dessert");
		this.dessertPrice5.html("");
		this.dessertImage.attr("src","images/loading.gif");

	 	// update the number of people
	 	this.myDinnerXPeople.html(model.getNumberOfGuests());
		var sum = 0;
	 	if(model.issetCourse("starter")) {
	 		model.getDish(model.getCourse("starter"), function(data){
	 			container.find("#starter5").html(data.title);
				model.getDishPrice("starter", function(pricePerPerson){
					container.find("#starterPrice5").html(pricePerPerson * model.getNumberOfGuests());
					sum += pricePerPerson * model.getNumberOfGuests();
				});
	 			container.find("#starterImage").attr("src",data.image);
	 		});
	 	}

	 	if(model.issetCourse("mainDish")) {
	 		model.getDish(model.getCourse("mainDish"), function(data){
	 			container.find("#main5").html(data.title);
				model.getDishPrice("mainDish", function(pricePerPerson){
					container.find("#mainPrice5").html(pricePerPerson * model.getNumberOfGuests());
					sum += pricePerPerson * model.getNumberOfGuests();
				});
	 			container.find("#mainImage").attr("src",data.image);
	 		});
	 	}

	 	if(model.issetCourse("dessert")) {
	 		model.getDish(model.getCourse("dessert"), function(data){
	 			container.find("#dessert5").html(data.title);
				model.getDishPrice("dessert", function(pricePerPerson){
					container.find("#dessertPrice5").html(pricePerPerson * model.getNumberOfGuests());
					sum += pricePerPerson * model.getNumberOfGuests();
				});
	 			container.find("#dessertImage").attr("src",data.image);
	 		});
	 	}

	 	this.totalPrice.html(sum + " SEK");




	 	/*
		if (model.starter) {
			getDish(model.starter, function(data){
				container.find("#starter5").html(data.title);
				container.find("#starterPrice5").html(model.getDishPrice("starter") + " SEK");
				console.log("Let's see the image...")
				console.log(model.getDish(model.getSelectedDish("starter")).image);
				container.find("#starterImage").attr("src",model.getDish(model.getSelectedDish("starter")).image);
			});
		}
		if (model.mainDish) {
			getDish(model.mainDish, function(data){
				container.find("#mainDish5").html(data.title);
				container.find("#mainDishPrice5").html(model.getDishPrice("mainDish") + " SEK");
				container.find("#mainDishImage").attr("src",model.getDish(model.getSelectedDish("mainDish")).image);
			});
		}
		if (model.dessert) {
			getDish(model.dessert, function(data){
				container.find("#dessert5").html(data.title);
				container.find("#dessertPrice5").html(model.getDishPrice("dessert") + " SEK");
				container.find("#dessertImage").attr("src",model.getDish(model.getSelectedDish("dessert")).image);
			});
		}
		*/



	 }

}
