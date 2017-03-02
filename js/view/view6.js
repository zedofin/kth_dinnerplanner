var View6 = function (container, model) {

	 // View 6
	 this.myDinnerXPeople = container.find("#myDinnerXPeople");
	 this.fullRecipe = container.find("#fullRecipe");
	 this.goBack = container.find("#goBack");
	



	// View 6
	 
	 model.addObserver(this);
	 this.update = function(obj){

		 //number of people
		 this.myDinnerXPeople.html("My Dinner: " + model.getNumberOfGuests() + " people");

		var fullRecipeHtml = "";

		if(model.issetCourse("starter")) {
	 		model.getDish(model.getCourse("starter"), function(data){
				fullRecipeHtml += "<td class='verticalAlignUp' height='400'><img src='" + data.image +"' width='400'/>" + "<h2>"+ data.title +"</h2>" + "<h3>" + "Ingredients: " + "</h3>";
				//console.log(data);
				for (ing in data.extendedIngredients) {
					//console.log(data.extendedIngredients[ing].amount + data.extendedIngredients[ing].unit + data.extendedIngredients[ing].name);
					fullRecipeHtml += "<p>" + data.extendedIngredients[ing].amount + " " + data.extendedIngredients[ing].unit + " " +data.extendedIngredients[ing].name + "</p>";
				}
				fullRecipeHtml += "<h3>" + "Instructions: " + "</h3>"
				for (step in data.analyzedInstructions[0].steps) {
					//console.log(data.analyzedInstructions[0].steps[step].number + ". " + data.analyzedInstructions[0].steps[step].step);
					fullRecipeHtml += "<p>" + data.analyzedInstructions[0].steps[step].number + ". " + data.analyzedInstructions[0].steps[step].step + "</p>";
				}
				fullRecipeHtml += "</td>"
	 		});
	 	}

		if(model.issetCourse("mainDish")) {
	 		model.getDish(model.getCourse("mainDish"), function(data){
				fullRecipeHtml += "<td class='verticalAlignUp'  height='400'><img src='" + data.image +"' width='400'/>" + "<h2>"+ data.title +"</h2>" + "<h3>" + "Ingredients: " + "</h3>";
				//console.log(data);
				for (ing in data.extendedIngredients) {
					//console.log(data.extendedIngredients[ing].amount + data.extendedIngredients[ing].unit + data.extendedIngredients[ing].name);
					fullRecipeHtml += "<p>" + data.extendedIngredients[ing].amount + " " + data.extendedIngredients[ing].unit + " " +data.extendedIngredients[ing].name + "</p>";
				}
				fullRecipeHtml += "<h3>" + "Instructions: " + "</h3>"
				for (step in data.analyzedInstructions[0].steps) {
					//console.log(data.analyzedInstructions[0].steps[step].number + ". " + data.analyzedInstructions[0].steps[step].step);
					fullRecipeHtml += "<p>" + data.analyzedInstructions[0].steps[step].number + ". " + data.analyzedInstructions[0].steps[step].step + "</p>";
				}
				fullRecipeHtml += "</td>"
	 		});
	 	}

		if(model.issetCourse("dessert")) {
	 		model.getDish(model.getCourse("dessert"), function(data){
				fullRecipeHtml += "<td class='verticalAlignUp' height='400'><img src='" + data.image +"' width='400'/>" + "<h2>"+ data.title +"</h2>" + "<h3>" + "Ingredients: " + "</h3>";
				//console.log(data);
				for (ing in data.extendedIngredients) {
					//console.log(data.extendedIngredients[ing].amount + data.extendedIngredients[ing].unit + data.extendedIngredients[ing].name);
					fullRecipeHtml += "<p>" + data.extendedIngredients[ing].amount + " " + data.extendedIngredients[ing].unit + " " +data.extendedIngredients[ing].name + "</p>";
				}
				fullRecipeHtml += "<h3>" + "Instructions: " + "</h3>"
				for (step in data.analyzedInstructions[0].steps) {
					//console.log(data.analyzedInstructions[0].steps[step].number + ". " + data.analyzedInstructions[0].steps[step].step);
					fullRecipeHtml += "<p>" + data.analyzedInstructions[0].steps[step].number + ". " + data.analyzedInstructions[0].steps[step].step + "</p>";
				}
				fullRecipeHtml += "</td>"
	 		});
	 	}
		//fullRecipeHtml += "";
		if (fullRecipeHtml == "") fullRecipeHtml = "Nothing to see here.";
		this.fullRecipe.html(fullRecipeHtml);

/*		
		 var menu = model.getFullMenu();
		 var fullRecipeHtml = "<table>";
		 for (i in menu){
		 	fullRecipeHtml += "<tr><td><img src=\"images/" + menu[i].image +"\" /></td><td><h2>"+ menu[i].name +"</h2><p>"+ menu[i].description + "</p></td><td><h3>Preparation</h3><p>" + menu[i].description +"</p></td></tr>";
		 }
		 fullRecipeHtml += "</table>";
		 this.fullRecipe.html(fullRecipeHtml);
*/
	 }

}
