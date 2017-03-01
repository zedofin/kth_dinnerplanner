var View4Controller = function (view, model) {	

	 view.backToSelectDish.click(function(){
	 	  document.getElementById("view1").style.display = "none";
		  document.getElementById("view3").style.display = "block";
		  document.getElementById("view4").style.display = "none";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "none";
		  showSideBar();
	 });
	 view.confirmDish.click(function(){
		  document.getElementById("view1").style.display = "none";
		  document.getElementById("view3").style.display = "block";
		  document.getElementById("view4").style.display = "none";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "none";
		  showSideBar();
		  model.addDishToMenu(model.getShowDish());

	 });

}