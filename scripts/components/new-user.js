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

            usersService.saveUser(user).then(function (response) {
                const errorDescription = response.data.data.description;
                const responseError = response.data.result;
                const codeError =  response.data.data.code;
                const userName = user.name;

                if (responseError === "ERROR"){
                    console.log("Error: "+ codeError, errorDescription);

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

            })
            .catch((error) => {
                alert("Error desconocido");
                console.log("Error: "+ error);
            });
        };
    }
});