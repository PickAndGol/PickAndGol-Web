/**
 * Created by balate on 4/4/17.
 */
angular.module("pickandgol").directive("formNewPub", function () {

    return {
        restrict: "EA",
        templateUrl: "views/form-new-pub.html",
        scope:{
            saveToClick: "&"
        },
        link: function(scope){

            scope.notifyPub = function(){
                scope.saveToClick({ name: scope.name,
                    longitude: scope.longitude,
                    latitude: scope.latitude,
                    urlWeb: scope.urlWeb});
            };
        }
    };
});