var View3Controller = function(view, model, container ) {

	 view.searchDishes.click(function(){
	 	model.getAllDishes( container.find("#dishType").val(), container.find("#dishKeyword").val(), function(results){


			view.searchResults.html("");
			view.searchResults.html("");

	 		var searchResultsHtml = '<table id="searchResultsOuterTable"><tr>';
	 		var newLineCounter = 1;
			for (i in results){
				results[i].description = "Lorem ipsum description right now in view3Controller.js: line 13(?)";
				//NORMAL IMAGES
				//searchResultsHtml += '<td><table id="searchResultsInnerTable"><tr><td><img onClick="" id="'+ results[i].id +'" class="dishImage" src="https://spoonacular.com/recipeImages/' + results[i].image +'" /></td></tr><tr><td><b>' + results[i].title + '</b></td></tr><tr><td>' + results[i].description + '</td></tr></table></td>';
				
				//BLURRED IMAGES
				searchResultsHtml += '<td><table id="searchResultsInnerTable"><tr><td>    <div class="placeholder" id="'+ results[i].id +'"> <div onClick="" id="'+ results[i].id +'" style="background-image:url(https://spoonacular.com/recipeImages/' + results[i].image +');" class="dishImage bg-image-blur20"></div> <div onClick="" id="'+ results[i].id +'" style="background-image:url(https://spoonacular.com/recipeImages/' + results[i].image +');" class="dishImage bg-image-blur15"></div> <div onClick="" id="'+ results[i].id +'" style="background-image:url(https://spoonacular.com/recipeImages/' + results[i].image +');" class="dishImage bg-image-blur10"></div> <div onClick="" id="'+ results[i].id +'" style="background-image:url(https://spoonacular.com/recipeImages/' + results[i].image +');" class="dishImage bg-image-blur5"></div> <div onClick="" id="'+ results[i].id +'" style="background-image:url(https://spoonacular.com/recipeImages/' + results[i].image +');" class="dishImage bg-image-blur2"></div> <div onClick="" id="'+ results[i].id +'" style="background-image:url(https://spoonacular.com/recipeImages/' + results[i].image +');" class="dishImage bg-image" ></div> </div>  </td></tr><tr><td><b>' + results[i].title + '</b></td></tr><tr><td>' + results[i].description + '</td></tr></table></td>';
				if (newLineCounter > 1) {
					searchResultsHtml += '</tr><tr>';
					newLineCounter = 0;
				}
				newLineCounter++;
			}
			searchResultsHtml += '</tr></table>';
			view.searchResults.html(searchResultsHtml);
			view.selectViewDish = container.find("imgsd");

			$("div[class=placeholder]").click(function(e){
		 		model.setShowDish(e.target.id, container.find("#dishType").val());
			  	document.getElementById("view1").style.display = "none";
			  	document.getElementById("view3").style.display = "none";
			  	document.getElementById("view4").style.display = "block";
			  	document.getElementById("view5").style.display = "none";
			  	document.getElementById("view6").style.display = "none";
			  	showSideBar();
	 		});
		}, function(results) {console.log(results); view.searchResults.html("There was an error in getting data, please try again! Message from model: " + results.statusText);}

);
	 });
	}
