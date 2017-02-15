var View5 = function (container, model) {

	 // View 5
	 this.myDinnerXPeople = container.find("#numberOfPeople");
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
	 this.goBackAndEditDinner = container.find("#goBackAndEditDinner");
	 this.printFullRecipe = container.find("#printFullRecipe");

	// View 5


	this.totalPrice.html(model.getTotalMenuPrice() + " SEK");

	model.addObserver(this);
	 this.update = function(obj){

	 	// update the number of people
	 	this.myDinnerXPeople.html(model.getNumberOfGuests());

		if (model.getSelectedDish("starter")) {
			this.starter5.html(model.getDish(model.getSelectedDish("starter")).name);
			this.starterPrice5.html(model.getDishPrice("starter") + " SEK");
			this.starterImage.attr("src","images/"+model.getDish(model.getSelectedDish("starter")).image);
		}

		if (model.getSelectedDish("main dish")) {
			this.main5.html(model.getDish(model.getSelectedDish("main dish")).name);
			this.mainPrice5.html(model.getDishPrice("main dish")+ " SEK");
			this.mainImage.attr("src","images/"+model.getDish(model.getSelectedDish("main dish")).image);
		}
			
		if (model.getSelectedDish("dessert")) {
			this.dessert5.html(model.getDish(model.getSelectedDish("dessert")).name);
			this.dessertPrice5.html(model.getDishPrice("dessert")+ " SEK");
			this.dessertImage.attr("src","images/"+model.getDish(model.getSelectedDish("dessert")).image);
		}

	 }

}