
/**
 * Created by balate on 5/3/17.
 */
angular.module("pickandgol").directive("formNewEvent", function () {

    return {
        restrict: "EA",
        templateUrl: "views/form-new-event.html",
        scope:{
            saveToClick: "&",
            pub: "<"
        },
        link: function(scope){

            scope.notifyEvent = function(){
                scope.saveToClick({
                    name: scope.name,
                    date: scope.date,
                    category: scope.category,
                    description: scope.description,
                    pub: scope.pub
                });
            };

        }
    };
});