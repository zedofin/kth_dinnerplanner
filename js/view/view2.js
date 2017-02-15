var View2 = function (container, model) {

	//add this view as an observer to the model
	model.addObserver(this);
	this.confirmDinner = container.find("#confirmDinner");

	 this.numberOfGuests = container.find("#numberOfGuests");

	 this.starter = container.find("#starter");
	 this.mainDish = container.find("#mainDish");
	 this.dessert = container.find("#dessert");

	 this.starterPrice = container.find("#starterPrice");
	 this.mainDishPrice = container.find("#mainDishPrice");
	 this.dessertPrice = container.find("#dessertPrice");
	this.dinnerPrice = container.find("#totalCost");
	this.update = function(obj){
		 // Dish names
		console.log(this.dinnerPrice);
		 this.starter.html(model.getDish(model.getSelectedDish("starter")).name);
		 this.mainDish.html(model.getDish(model.getSelectedDish("main dish")).name);
		 this.dessert.html(model.getDish(model.getSelectedDish("dessert")).name);

		 // Dish costs
		 this.starterPrice.html(model.getDishPrice("starter"));
		 this.mainDishPrice.html(model.getDishPrice("main dish"));
		 this.dessertPrice.html(model.getDishPrice("dessert"));
this.dinnerPrice.html(model.getTotalMenuPrice()*this.numberOfGuests.attr("value"));

	};
	 // using input[type=number] in this case
	 /*
	 this.plusButton = container.find("#plusGuest");
	 this.minusButton = container.find("#minusGuest");
	 */
	 this.numberOfGuests.attr("value", model.getNumberOfGuests);
	 model.setNumberOfGuests(this.numberOfGuests.attr("value"));

	 
	 // Total cost
     	this.dinnerPrice.html(model.getTotalMenuPrice()*this.numberOfGuests.attr("value"));


 }
