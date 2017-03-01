var View3Controller = function(view, model, container ) {

	 view.searchDishes.click(function(){
	 	//view.searchResults = container.find("#searchResults");
	 	//view.dishType = document.getElementById("dishType");
	 	//view.dishKeyword = container.find("#dishKeyword");
	 	//console.log(view.dishType.options.selectedIndex);
	 	//console.log(view.dishType.options[view.dishType.options.selectedIndex]);
	 	
	 	//if (view.dishKeyword.val() == "") {results = model.getAllDishes(view.dishType.options[view.dishType.options.selectedIndex].value);}
	 	//else {results = model.getAllDishes(view.dishType.options[view.dishType.options.selectedIndex].value,view.dishKeyword.val());}

	 	//console.log(view.dishType);

	 	model.getAllDishes( view.dishType.val(), view.dishKeyword.val(), function(results){
	 		var searchResultsHtml = '<table id="searchResultsOuterTable"><tr>';
	 		var newLineCounter = 1;
			for (i in results){
				results[i].description = "Lorem ipsum description right now";
				searchResultsHtml += '<td><table id="searchResultsInnerTable"><tr><td><img onClick="" id="'+ results[i].id +'" src="images/' + results[i].image +'" /></td></tr><tr><td><b>' + results[i].title + '</b></td></tr><tr><td>' + results[i].description + '</td></tr></table></td>';
				if (newLineCounter > 3) {
					searchResultsHtml += '</tr><tr>';
					newLineCounter = 0;
				}
				newLineCounter++;
			}
			searchResultsHtml += '</tr></table>';
			view.searchResults.html(searchResultsHtml);
			view.selectViewDish = container.find("imgsd");

			$('img').click(function(e){
		 		model.setShowDish(e.target.id, container.find("#dishType").val());
			  	document.getElementById("view1").style.display = "none";
			  	document.getElementById("view3").style.display = "none";
			  	document.getElementById("view4").style.display = "block";
			  	document.getElementById("view5").style.display = "none";
			  	document.getElementById("view6").style.display = "none";
			  	showSideBar();
	 		});
		});
	 });
	}