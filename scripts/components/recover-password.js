/**
 * Created by balate on 4/3/17.
 */
angular.module("pickandgol").component("recover",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/recover-password.html",

    controller: function(usersService){

        var self = this;
        var recover;

        self.recoverUser = function(email) {
            var recover = {email:email};
            usersService.recoverUser(recover).then(function(response) {
                console.log(recover);
                // $scope.user.push(response.data);
               // console.log("data....",response.data);
                recover = response.data.data;
                console.log("response full", response);
                //console.log("response data/data", response.data.data);

            });
        };
    }
});