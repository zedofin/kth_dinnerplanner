var View2Controller = function(view, model ) {

view.confirmDinner.click(function() {
	  document.getElementById("view3").style.display = "none";
	  document.getElementById("view4").style.display = "none";
	  document.getElementById("view5").style.display = "block";
	  hideSideBar();
	});
}
