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
	 this.goBackAndEditDinner = container.find("#goBackAndEditDinner");
	 this.printFullRecipe = container.find("#printFullRecipe");

	// View 5


	this.totalPrice.html(model.getTotalMenuPrice() + " SEK");

	model.addObserver(this);
	 this.update = function(obj){

	 	// update the number of people
	 	this.myDinnerXPeople.innerHtml = model.getNumberOfGuests();

		this.starter5.html(model.getDish(model.getSelectedDish("starter")).name);
		this.main5.html(model.getDish(model.getSelectedDish("main dish")).name);
		this.dessert5.html(model.getDish(model.getSelectedDish("dessert")).name);
		 
		this.starterPrice5.html(model.getDishPrice("starter") + " SEK");
		this.mainPrice5.html(model.getDishPrice("main dish")+ " SEK");
		this.dessertPrice5.html(model.getDishPrice("dessert")+ " SEK");

		this.starterImage.attr("src","images/"+model.getDish(model.getSelectedDish("starter")).image);
		this.mainImage.attr("src","images/"+model.getDish(model.getSelectedDish("main dish")).image);
		this.dessertImage.attr("src","images/"+model.getDish(model.getSelectedDish("dessert")).image);


	 	
	 }

	 this.goBackAndEditDinner.click(function(){
		  document.getElementById("view1").style.display = "none";
		  //document.getElementById("view2").style.display = "block";
		  document.getElementById("view3").style.display = "block";
		  document.getElementById("view4").style.display = "none";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "none";
		  showSideBar();
	 });
	 this.printFullRecipe.click(function(){
		  document.getElementById("view1").style.display = "none";
		  //document.getElementById("view2").style.display = "none";
		  document.getElementById("view3").style.display = "none";
		  document.getElementById("view4").style.display = "none";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "block";
		  hideSideBar();
		});
}