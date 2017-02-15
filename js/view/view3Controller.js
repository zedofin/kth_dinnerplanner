var View3Controller = function(view, model ) {

	 view.searchDishes.click(function(){
	 	view.searchResults = container.find("#searchResults");
	 	view.dishType = document.getElementById("dishType");
	 	view.dishKeyword = container.find("#dishKeyword");
	 	//console.log(view.dishType.options.selectedIndex);
	 	//console.log(view.dishType.options[view.dishType.options.selectedIndex]);
	 	if(view.dishKeyword.val() == "") {results = model.getAllDishes(view.dishType.options[view.dishType.options.selectedIndex].value);}
	 	else {results = model.getAllDishes(view.dishType.options[view.dishType.options.selectedIndex].value,view.dishKeyword.val());}

 		 var searchResultsHtml = '<table id="searchResultsOuterTable"><tr>';
		 for (i in results){
		 	searchResultsHtml += '<td><table id="searchResultsInnerTable"><tr><td><img onClick="" id="'+ results[i].id +'" src="images/' + results[i].image +'" /></td></tr><tr><td>' + results[i].name + '</td></tr><tr><td>' + results[i].description + '</td></tr></table></td>';
		 }
		 searchResultsHtml += '</tr></table>';
		 view.searchResults.html(searchResultsHtml);
		 view.selectviewDish = container.find("img");
		 	 	view.selectviewDish.click(function(e){
	 	  //model.setShowDish(event.target.number);
	 	  model.setShowDish(e.target.id);
		  document.getElementById("view1").style.display = "none";
		  document.getElementById("view3").style.display = "none";
		  document.getElementById("view4").style.display = "block";
		  document.getElementById("view5").style.display = "none";
		  document.getElementById("view6").style.display = "none";
		  showSideBar();
	 	});
	 });
	}