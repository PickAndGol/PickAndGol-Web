/**
 * Created by balate on 1/3/17.
 */

angular.module("pickandgol").directive("formLoginUser", function () {

    return {
        restrict: "EA",
        templateUrl: "views/form-login-user.html",
        scope:{
            loginToClick: "&"
        },
        link: function (scope){
            scope.notifyLogin = function (){
                scope.loginToClick({
                    password: scope.password,
                    email: scope.email
                });
            };
        }
    };
});
