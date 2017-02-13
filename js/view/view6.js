var View6 = function (container, model) {

	 // View 6
	 this.myDinnerXPeople = container.find("#myDinnerXPeople");
	 this.fullRecipe = container.find("#fullRecipe");
	 this.goBack = container.find("#goBack");
	



	// View 6
	 
	 model.addObserver(this);
	 this.update = function(obj){

		 //number of people
		 this.myDinnerXPeople.html("My Dinner: " + model.getNumberOfGuests());


		 var menu = model.getFullMenu();
		 var fullRecipeHtml = "<table>";
		 for (i in menu){
		 	fullRecipeHtml += "<tr><td><img src=\"images/" + menu[i].image +"\" /></td><td><h2>"+ menu[i].name +"</h2><p>"+ menu[i].description + "</p></td><td><h3>Preparation</h3><p>" + menu[i].description +"</p></td></tr>";
		 }
		 fullRecipeHtml += "</table>";
		 this.fullRecipe.html(fullRecipeHtml);
	 }

	 this.goBack.click(function(){
		  document.getElementById("view1").style.display = "none";
		  //document.getElementById("view2").style.display = "none";
		  document.getElementById("view3").style.display = "none";
		  document.getElementById("view4").style.display = "none";
		  document.getElementById("view5").style.display = "block";
		  document.getElementById("view6").style.display = "none";
		  hideSideBar();
		});
}