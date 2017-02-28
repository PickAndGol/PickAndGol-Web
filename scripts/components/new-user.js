/**
 * Created by balate on 28/2/17.
 */
angular.module("pickandgol").component("newUser",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/user-register.html",

    controller: function(ServiceBackend){

        var self = this;

        self.saveUser = function(name,password,email) {
            var user = { name: name,
                password:password,
                email:email};
            ServiceBackend.saveUser(user).then(function(response) {
                console.log(user);
                // $scope.user.push(response.data);
                console.log("data....",response.data);
                console.log("response full", response);

                if(response.data.data.code === 400){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("Asegurate de completar todos los datos y que estos sean validos");
                }else if (response.data.data.code === 409){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                }else{
                    alert("Usuario "+ user.name +" registrado!! ");
                }

            });
        };
    }
});