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

		 /*
		this.starter.html("");
		this.starterPrice.html("");
		this.mainDish.html("");
		this.mainDishPrice.html("");
		this.dessert.html("");
		this.dessertPrice.html("");
		*/
		var sum = 0;
		if (model.issetCourse("starter")) {
			model.getDish(model.getCourse("starter"), function(data){
				container.find("#starter").html("<b>×</b> "+ data.title);
				model.getDishPrice("starter", function(data){
					container.find("#starterPrice").html(data);
					sum = sum + data;
				});
			});
		}
		if (model.issetCourse("mainDish")) {
			model.getDish(model.getCourse("mainDish"), function(data){
				container.find("#mainDish").html("<b>×</b> "+ data.title);
				model.getDishPrice("mainDish", function(data){
					container.find("#mainDishPrice").html(data);
					sum = sum + data;
				});
			});
		}
		if (model.issetCourse("dessert")) {
			model.getDish(model.getCourse("dessert"), function(data){
				container.find("#dessert").html("<b>×</b> "+ data.title);
				model.getDishPrice("dessert", function(data){
					container.find("#dessertPrice").html(data);
					sum = sum + data;
				});
			});
		}

		 // Dish costs
		this.dinnerPrice.html(sum * model.getNumberOfGuests());

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
