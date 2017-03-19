/**
 * Created by balate on 18/3/17.
 */
var ctrl = function (categoriesService) {
    // this references context, this context is the one we need,
    // so we save it on self var
    var self = this;

    categoriesService.getCategories() // Returns a promise
        .then(function (response) {
            // Get data
            self.categories = response.data.data.items;
            self.totalcategories = response.data.data.total;

            console.log(self.categories ,'categories');
        });
    self.saveCategory = function(name,_id){
        var category = {   name: name,
            _id:_id};

        categoriesService.saveCategory(category).then(function(response) {
            console.log(category);
            console.log("data Category....",response.data);
        });

};


    // Get image path
    //self.getImagePath = eventsService.getImagePath;

};

ctrl.$inject = ["categoriesService"];

angular
    .module("pickandgol")
    .component("categories", {
        // component view
        templateUrl: "views/categories.html",
        controller: ctrl // Component logic
    });
