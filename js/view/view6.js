var View6 = function (container, model) {

	 // View 6
	 this.myDinnerXPeople = container.find("#myDinnerXPeople");
	 this.fullRecipe = container.find("#fullRecipe");
	

	 //number of people
	 this.myDinnerXPeople.html("My Dinner: " + model.getNumberOfGuests());


	// View 6
	 var menu = model.getFullMenu();
	 var fullRecipeHtml = "<table>";
	 for (i in menu){
	 	fullRecipeHtml += "<tr><td><img src=\"images/" + menu[i].image +"\" /></td><td><h2>"+ menu[i].name +"</h2><p>"+ menu[i].description + "</p></td><td><h3>Preparation</h3><p>" + menu[i].description +"</p></td></tr>";
	 }
	 fullRecipeHtml += "</table>";
	 this.fullRecipe.html(fullRecipeHtml);

}