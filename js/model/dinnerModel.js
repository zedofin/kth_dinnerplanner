var SpoonacularApiKey= 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB';


//DinnerModel Object constructor
var DinnerModel = function() {
 
    //TODO Lab 2 implement the data structure that will hold number of guest
    // and selected dinner options for dinner menu

    var numberOfGuests = 1;
    var observers = [];
    var showDish = [];
    var dishes = [];
    var starter = "";
    var mainDish = "";
    var dessert = "";
    var localDishes = [];
    var getDish_lastCall;

    // SET starter / mainDish / dessert
    this.setCourse = function(type, value){
        if (type == "starter") starter = value;
        if (type == "mainDish") mainDish = value;
        if (type == "dessert") dessert = value;
    }

    // GET starter / mainDish / dessert
    this.getCourse = function(type){
        if (type == "starter") return starter;
        if (type == "mainDish") return mainDish;
        if (type == "dessert") return dessert;
    }

    // CHECK if starter / mainDish / dessert is non-empty
    this.issetCourse = function(type){
        if (type == "starter") return (starter == "" ? false: true);
        if (type == "mainDish") return (mainDish == "" ? false: true);
        if (type == "dessert") return (dessert == "" ? false: true);
    }

    // Tells what dish-image was clicked last in VIEW-3
    this.getShowDish = function(){
        return showDish;
    }

    // Sets last clicked dish-image in VIEW-3
    this.setShowDish = function(id, type){
        showDish = [id, type];
        notifyObservers();
    }

    // Adds a view to "to-be-updated"-list
    this.addObserver = function(observer) { 
        observers.push(observer);
    }

    // Updates everyone in the "to-be-updated"-list
    var notifyObservers = function(obj) {
        for (ob1 in observers){
            observers[ob1].update();
        }
    } 

    // Updates NumberOfGuests – from view to model
    this.updateNumberOfGuests = function(){
        numberOfGuests = document.getElementById("numberOfGuests").val();
        notifyObservers();
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

    // Returns the dish that is on the menu for selected type 
    this.getSelectedDish = function(type) {
        //TODO Lab 2
        if (type == "starter" && starter) return starter; 
        if (type == "mainDish" && mainDish) return mainDish;
        if (type == "dessert" && dessert) return dessert;
        return false;
    }

    // Returns all the dishes on the menu.
    this.getFullMenu = function() {
        //TODO Lab 2
        var allDishes = [];
        if (starter) allDishes = allDishes.concat(starter);
        if (mainDish) allDishes = allDishes.concat(mainDish);
        if (dessert) allDishes = allDishes.concat(dessert);
        return ""+starter+", "+mainDish+", "+dessert;//allDishes;
    }

    // Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function() {
        //TODO Lab 2
        var allIngredients = [];
        if (starter){
            this.getDishIngredients(starter, function(dishIngredients){
                allIngredients.concat(dishIngredients);
            });
        }
        if (mainDish){
            this.getDishIngredients(mainDish, function(dishIngredients){
                allIngredients.concat(dishIngredients);
            });
        }
        if (dessert){
            this.getDishIngredients(dessert, function(dishIngredients){
                allIngredients.concat(dishIngredients);
            });
        }
        return  allIngredients;
    }

    // Returns ingredients for a dish
    this.getDishIngredients = function(id, cb){
        $.ajax( {
           url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information',
           headers: {
             'X-Mashape-Key': SpoonacularApiKey
           },
           success: function(data) {
             cb(data.extendedIngredients);
           },
           error: function(data) {
             console.log(data)
           }
        }) 
    }

    // Summs prices of ingredients of given dish
    this.getDishPrice = function(type, cb) {
        this.getDish(this.getCourse(type), function(data){
            

            cb(data.pricePerServing);

            /*
            var sum = 0;
            var ings = data.extendedIngredients;
            for (i in ings) sum += ings[i].amount;
            cb(sum / data.servings);
            */
        });
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

    // Adds the passed dish to the menu. If the dish of that type already exists on the menu
    // it is removed from the menu and the new one added.
    this.addDishToMenu = function(dish) { // params: dish[id, type]
        //TODO Lab 2 
        if (dish[1]=="starter") starter = dish[0];
        if (dish[1]=="mainDish") mainDish = dish[0];
        if (dish[1]=="dessert") dessert = dish[0];
        notifyObservers();
    }

    // Removes dish from menu
    this.removeDishFromMenu = function(id) {
        //TODO Lab 2
        if (starter == id) starter = "";
        if (mainDish == id) mainDish = "";
        if (dessert == id) dessert = "";
        notifyObservers();
    }

    // function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    // you can use the filter argument to filter out the dish by name or ingredient (use for search)
    // if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type,filter,cb, cbError) {
        if (type == "mainDish") type = "main dish";
        console.log("Type: "+type +", Filter: "+filter);

        $.ajax( {
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type='+type+'&query='+filter+'',
            headers: {
    	       'X-Mashape-Key': SpoonacularApiKey
            },
            success: function(data) {
                console.log("model sends data:");
                console.log(data.results);
                cb(data.results);
            },
            error: function(data) {
		cbError(data);
            }
        }) 
    }

    //function that returns a dish of specific ID
    this.getDish = function (id, cb) {
        // Let's check if dish is already downloaded
        for (i in localDishes){
            if (id == localDishes[i].id){
                console.log("LOCAL in getDish");
                cb(localDishes[i]);
                return true;
            }
        }

        // If not local, then let's GET it
         $.ajax( {
           url:  'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information',
           headers: {
             'X-Mashape-Key': SpoonacularApiKey
           },
           success: function(data) {
            localDishes.push(data);
            cb(localDishes[localDishes.length-1]);
           },
           error: function(data) {
             console.log("NEW QUERY in getDish");
             console.log(data)
           }
         })
    }
}
