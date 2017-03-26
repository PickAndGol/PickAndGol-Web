/**
 * Created by balate on 28/2/17.
 */
angular.module("pickandgol").component("newUser",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/user-register.html",

    controller: function (usersService){

        var self = this;

        self.saveUser = function (name,password,email) {
            var user = {
                name: name,
                password:password,
                email:email
            };
            usersService.saveUser(user).then(function(response) {
                //console.log(user);
                // $scope.user.push(response.data);
                //console.log("data....",response.data);
                //console.log("response full", response);
                var errorDescription = response.data.data.description;
                var responseError = response.data.result;
                var codeError =  response.data.data.code;
                var userName = user.name;

                if (responseError === "ERROR"){
                    console.log("Error: "+ codeError + " " + errorDescription);

                    switch (codeError) {
                    case 400:
                        alert("Asegurate de completar todos los datos y que estos sean validos");
                        break;

                    case 409:
                        alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                        break;

                    default:
                        alert("Error desconocido");
                        break;
                    }

                    return;
                }

                alert("Usuario "+ userName +" registrado!! ");
                window.location.href= "/events";

            });
        };
    }
});