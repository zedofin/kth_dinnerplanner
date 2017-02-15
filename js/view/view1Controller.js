//ExampleViewController Object constructor
var View1Controller = function(view, model ) {

 view.createNewDinner.click(function(){
		  document.getElementById("view1").style.display = "none";
		  document.getElementById("view3").style.display = "block";
		  showSideBar();
	});
}
