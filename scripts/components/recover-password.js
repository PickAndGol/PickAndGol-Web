/**
 * Created by balate on 4/3/17.
 */
angular.module("pickandgol").component("recover",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/recover-password.html",

    controller: function(ServiceBackend){

        var self = this;

        self.recoverUser = function(email) {
            var recover = {email:email};
            ServiceBackend.recoverUser(recover).then(function(response) {
                console.log(recover);
                // $scope.user.push(response.data);
               // console.log("data....",response.data);
                console.log("response full", response);

                /*if(response.data.data.code === 400){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("Asegurate de completar todos los datos y que estos sean validos");
                }else if (response.data.data.code === 409){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                }else{
                    alert("Usuario "+ user.name +" registrado!! ");
                }*/

            });
        };
    }
});