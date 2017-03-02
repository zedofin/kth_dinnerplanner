var View2Controller = function(view, model ) {

	view.numberOfGuests.change(function(){
		model.setNumberOfGuests(view.numberOfGuests.val());
	});

	view.starter.click(function(){
		model.removeDishFromMenu(model.getSelectedDish("starter"));
		view.starter.html("");
		view.starterPrice.html("");
	});

	view.mainDish.click(function(){
		model.removeDishFromMenu(model.getSelectedDish("mainDish"));
		view.mainDish.html("");
		view.mainDishPrice.html("");
	});

	view.dessert.click(function(){
		model.removeDishFromMenu(model.getSelectedDish("dessert"));
		view.dessert.html("");
		view.dessertPrice.html("");
	});

	view.confirmDinner.click(function() {
	  document.getElementById("view3").style.display = "none";
	  document.getElementById("view4").style.display = "none";
	  document.getElementById("view5").style.display = "block";
	  hideSideBar();
	});
}
