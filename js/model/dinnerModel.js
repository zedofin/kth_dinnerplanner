var SpoonacularApiKey= 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB';


//DinnerModel Object constructor
var DinnerModel = function() {
 
    //TODO Lab 2 implement the data structure that will hold number of guest
    // and selected dinner options for dinner menu

    var numberOfGuests = 1;
    var menuDishes = [];
    var observers = [];
    var showDish = 1;
    var dishes = [];

    this.getShowDish = function(){
        console.log("returning from getShowDish with id " + showDish);
        return showDish;
    }

    this.setShowDish = function(id){
        console.log("inside setShowDish with id: " + id);
        showDish = id;
        notifyObservers();
    }

    this.updateNumberOfGuests = function(){
        numberOfGuests = document.getElementById("numberOfGuests").val();
    }

    this.addObserver = function(observer) { 
        observers.push(observer);
    }

    var notifyObservers = function(obj) {
        for (ob1 in observers){
            observers[ob1].update();
            console.log(observers[ob1]);
        }
    } 

    this.setNumberOfGuests = function(num) {
        //TODO Lab 2
        numberOfGuests = num;
        notifyObservers();
    }

    // should return 
    this.getNumberOfGuests = function() {
        //TODO Lab 2
        return numberOfGuests;
    }

    //Returns the dish that is on the menu for selected type 
    this.getSelectedDish = function(type) {
        //TODO Lab 2
        for (i in menuDishes){
            if (type == this.getDish(menuDishes[i]).type) return menuDishes[i];
        }
        return false;
    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function() {
        //TODO Lab 2

        var allDishes = [];
        for (i in menuDishes){
            allDishes = allDishes.concat(this.getDish(menuDishes[i]));
        }

        return allDishes;

    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function() {
        //TODO Lab 2

        var allIngredients = [];
        for (i in menuDishes){
            allIngredients = allIngredients.concat(this.getDish(menuDishes[i]).ingredients);
        }
        return  allIngredients;

    }

    this.getDishIngredients = function(id, cb){
        $.ajax( {
           url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information',
           headers: {
             'X-Mashape-Key': SpoonacularApiKey
           },
           success: function(data) {
             console.log(data.extendedIngredients);
             cb(data.extendedIngredients);
           },
           error: function(data) {
             console.log(data)
           }
        }) 
    }

    this.getDishPrice = function(type) {
        var ings = this.getDish(this.getSelectedDish(type)).ingredients;
        var sum = 0;
        for (i in ings){
            sum = sum + ings[i].price;
        }
        return sum;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function() {
        //TODO Lab 2
        var ings = this.getAllIngredients();
        var sum = 0;
        for (i in ings){
            sum = sum + ings[i].price;
        }

        return sum;
        
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function(id) {
        //TODO Lab 2 
        var thisType = this.getDish(id).type;

        for (var i = 0; i < menuDishes.length; i++){
            if (this.getDish(menuDishes[i]).type == thisType){
                menuDishes.splice(i, 1);
            }
        }

        menuDishes.push(id);
        notifyObservers();
    }

    //Removes dish from menu
    this.removeDishFromMenu = function(id) {
        //TODO Lab 2
        var index = menuDishes.indexOf(id);
        if (index > -1) menuDishes.splice(index, 1);
        notifyObservers();
    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type,filter,cb) {

		 $.ajax( {
		   url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type='+type+'&query='+filter+'',
		   headers: {
		     'X-Mashape-Key': SpoonacularApiKey
		   },
		   success: function(data) {
		     console.log(data.results);
             cb(data.results);
		   },
		   error: function(data) {
		     console.log(data)
		   }
		 }) 
    }

    //function that returns a dish of specific ID
    this.getDish = function (id, cb) {
         $.ajax( {
           url:  'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information',
           headers: {
             'X-Mashape-Key': SpoonacularApiKey
           },
           success: function(data) {
             console.log(data);
             cb(data);
           },
           error: function(data) {
             console.log(data)
           }
         })
    }
}
