var View3 = function (container, model) {

	 // View 3
	 this.searchResults = container.find("#searchResults");
	 this.dishType = container.find("#dishType");
	 this.dishKeyword = container.find("#dishKeyword");
	 this.searchDishes = container.find("#searchDishes");


	// View 3
	// creating search results
	 //var results = model.getAllDishes(this.dishType.text(), this.dishKeyword);
	 var results = model.getAllDishes("starter");

	 var searchResultsHtml = '<table id="searchResultsOuterTable"><tr>';
	 for (i in results){
	 	searchResultsHtml += '<td><table id="searchResultsInnerTable"><tr><td><img onClick="" id="selectThisDish" number="'+ results[i].name +'" src="images/' + results[i].image +'" /></td></tr><tr><td>' + results[i].name + '</td></tr><tr><td>' + results[i].description + '</td></tr></table></td>';
	 }
	 searchResultsHtml += '</tr></table>';
	 this.searchResults.html(searchResultsHtml);

	model.addObserver(this);
	 this.update = function(obj){

	 }

	 this.searchDishes.click(function(){
	 	this.searchResults = container.find("#searchResults");
	 	results = model.getAllDishes(type, keyword);

 		 var searchResultsHtml = '<table id="searchResultsOuterTable"><tr>';
		 for (i in results){
		 	searchResultsHtml += '<td><table id="searchResultsInnerTable"><tr><td><img onClick="" id="selectThisDish" number="'+ results[i].name +'" src="images/' + results[i].image +'" /></td></tr><tr><td>' + results[i].name + '</td></tr><tr><td>' + results[i].description + '</td></tr></table></td>';
		 }
		 searchResultsHtml += '</tr></table>';
		 this.searchResults.html(searchResultsHtml);
	 });



	 $( document ).ready(function() {
	 	this.selectThisDish = container.find("#selectThisDish");

	 	this.selectThisDish.click(function(e){
	 	  //model.setShowDish(event.target.number);
	 	  console.log(model.getShowDish());

		  document.getElementById("view1").style.display = "none";
		  document.getElementById("view3").style.display = "none";
		  document.getElementById("view4").style.display = "block";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "none";
		  showSideBar();
	 	});
	 });


}