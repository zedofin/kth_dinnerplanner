var View3 = function (container, model) {

	 // View 3
	 this.searchResults = container.find("#searchResults");


	// View 3
	// creating search results
	 var results = model.getAllDishes("main dish");
	 var searchResultsHtml = '<table id="searchResultsOuterTable"><tr>';
	 for (i in results){
	 	searchResultsHtml += '<td><table id="searchResultsInnerTable"><tr><td><img id="selectThisDish" onClick="selectThisDish()" src="images/' + results[i].image +'" /></td></tr><tr><td>' + results[i].name + '</td></tr><tr><td>' + results[i].description + '</td></tr></table></td>';
	 }
	 searchResultsHtml += '</tr></table>';
	 this.searchResults.html(searchResultsHtml);
	 console.log("A");
}