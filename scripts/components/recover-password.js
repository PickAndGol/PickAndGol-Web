/**
 * Created by balate on 4/3/17.
 */

var ctrl = function (usersService) {
    
    var self = this;

    self.recoverUser = function(email) {
        var recover = {email:email};
        usersService.recoverUser(recover).then(function(response) {
            console.log(recover);
            // $scope.user.push(response.data);
            // console.log("data....",response.data);
            recover = response.data.data;
            console.log("response full", response);
            //console.log("response data/data", response.data.data);
            alert("email enviado, revise su correo por favor ");
            window.location.href= "/events";
        });
    };
};

ctrl.$inject = ["usersService"];

angular.module("pickandgol")
    .component("recover",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/recover-password.html",
    controller: ctrl

    });

