var View5Controller = function (view, model) {


	 view.goBackAndEditDinner.click(function(){
		  document.getElementById("view1").style.display = "none";
		  //document.getElementById("view2").style.display = "block";
		  document.getElementById("view3").style.display = "block";
		  document.getElementById("view4").style.display = "none";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "none";
		  showSideBar();
	 });
	 view.printFullRecipe.click(function(){
		  document.getElementById("view1").style.display = "none";
		  //document.getElementById("view2").style.display = "none";
		  document.getElementById("view3").style.display = "none";
		  document.getElementById("view4").style.display = "none";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "block";
		  hideSideBar();
		});
}