var View5 = function (container, model) {

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

	// View 5
	this.myDinnerXPeople.html("My Dinner: " + model.getNumberOfGuests());

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


}