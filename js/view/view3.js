var View3 = function (container, model) {

	 // View 3
	 this.searchResults = container.find("#searchResults");
	 this.dishType = container.find("#dishType");
	 this.dishKeyword = container.find("#dishKeyword");
	 this.searchDishes = container.find("#searchDishes");


	// View 3
	// creating search results
	 var results = [];
	 //var results = model.getAllDishes("starter");



	model.addObserver(this);
	 this.update = function(obj){

	 }

/*	 this.searchDishes.click(function(){
	 	this.searchResults = container.find("#searchResults");
	 	this.dishType = document.getElementById("dishType");
	 	this.dishKeyword = container.find("#dishKeyword");
	 	//console.log(this.dishType.options.selectedIndex);
	 	//console.log(this.dishType.options[this.dishType.options.selectedIndex]);
	 	if(this.dishKeyword.val() == "") {results = model.getAllDishes(this.dishType.options[this.dishType.options.selectedIndex].value);}
	 	else {results = model.getAllDishes(this.dishType.options[this.dishType.options.selectedIndex].value,this.dishKeyword.val());}

 		 var searchResultsHtml = '<table id="searchResultsOuterTable"><tr>';
		 for (i in results){
		 	searchResultsHtml += '<td><table id="searchResultsInnerTable"><tr><td><img onClick="" id="'+ results[i].id +'" src="images/' + results[i].image +'" /></td></tr><tr><td>' + results[i].name + '</td></tr><tr><td>' + results[i].description + '</td></tr></table></td>';
		 }
		 searchResultsHtml += '</tr></table>';
		 this.searchResults.html(searchResultsHtml);
		 this.selectThisDish = container.find("img");
		 	 	this.selectThisDish.click(function(e){
	 	  //model.setShowDish(event.target.number);
	 	  model.setShowDish(e.target.id);
		  document.getElementById("view1").style.display = "none";
		  document.getElementById("view3").style.display = "none";
		  document.getElementById("view4").style.display = "block";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "none";
		  showSideBar();
	 	});
	 }); */

	 
	 	this.selectThisDish = container.find("img");

	 	this.selectThisDish.click(function(e){
	 	  //model.setShowDish(event.target.number);
	 	  model.setShowDish(e.target.id);

		  document.getElementById("view1").style.display = "none";
		  document.getElementById("view3").style.display = "none";
		  document.getElementById("view4").style.display = "block";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "none";
		  showSideBar();
	 	});
	 


}
