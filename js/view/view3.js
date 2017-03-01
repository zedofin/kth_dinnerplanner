var View3 = function (container, model) {

	var results = [];
	this.searchResults = container.find("#searchResults");
	this.dishType = container.find("#dishType");
	this.dishKeyword = container.find("#dishKeyword");
	this.searchDishes = container.find("#searchDishes");
    /*
    this.selectViewDish = container.find("img");
 	this.selectThisDish = container.find("img");

 	this.selectThisDish.click(function(e){
 		console.log("–––view3–––");
 		console.log(e.target.id, container.find("#dishType"));
 		model.setShowDish(e.target.id, container.find("#dishType"));
	  	document.getElementById("view1").style.display = "none";
	  	document.getElementById("view3").style.display = "none";
	  	document.getElementById("view4").style.display = "block";
	  	document.getElementById("view5").style.display = "none";
	  	document.getElementById("view6").style.display = "none";
	  	showSideBar();
 	});
	 
	model.addObserver(this);
	this.update = function(obj){
	}
	*/
}
