/**
 * Created by balate on 28/2/17.
 */

angular.module("pickandgol").directive("formNewUser", function () {

    return {
        restrict: "EA",
        templateUrl: "views/form-new-user.html",
        scope:{
            saveToClick: "&"
        },
        link: function (scope){
            scope.notifyUser = function(){
                scope.saveToClick({
                    name: scope.name,
                    password: scope.password,
                    email: scope.email
                });
            };
        }
    };
});

