var View1 = function (container, model) {
	
	this.createNewDinner = container.find("#createNewDinner");

	model.addObserver(this);
	 this.update = function(obj){
	 	
	}

	this.createNewDinner.click(function(){
		  document.getElementById("view1").style.display = "none";
		  document.getElementById("view3").style.display = "block";
		  showSideBar();
	});
}

