/**
 * Created by balate on 19/3/17.
 */
angular.module("pickandgol").directive("categories", function () {

    return {
        restrict: "EA",
        templateUrl: "views/categories.html",
        scope:{
            saveCategoryToClick: "&"
        },
        link: function(scope){

            scope.notifyCategory = function(){
                scope.saveCategoryToClick({ name: scope.name,
                    _id: scope._id
                });
            };
        }
    };
});