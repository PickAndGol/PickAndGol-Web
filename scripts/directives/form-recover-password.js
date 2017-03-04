/**
 * Created by balate on 4/3/17.
 */
angular.module("pickandgol").directive("formRecoverPassword", function () {

    return {
        restrict: "EA",
        templateUrl: "views/form-recover-password.html",
        scope:{
            sendToClick: "&"
        },
        link: function(scope){
            scope.notifyServer = function(){
                scope.sendToClick({email: scope.email});
            };

        }
    };
});
