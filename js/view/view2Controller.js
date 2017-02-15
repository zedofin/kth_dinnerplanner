var View2Controller = function(view, model ) {

	view.numberOfGuests.change(function(){
		model.setNumberOfGuests(view.numberOfGuests.val());
	});

	view.starter.click(function(){
		model.removeDishFromMenu(model.getSelectedDish("starter"));
	});

	view.mainDish.click(function(){
		model.removeDishFromMenu(model.getSelectedDish("main dish"));
	});

	view.dessert.click(function(){
		model.removeDishFromMenu(model.getSelectedDish("dessert"));
	});

	view.confirmDinner.click(function() {
	  document.getElementById("view3").style.display = "none";
	  document.getElementById("view4").style.display = "none";
	  document.getElementById("view5").style.display = "block";
	  hideSideBar();
	});
}
