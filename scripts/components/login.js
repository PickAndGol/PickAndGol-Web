/**
 * Created by balate on 1/3/17.
 */
angular.module("pickandgol").component("newLogin",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/login.html",

    controller: function(usersService){

        var loginData;
        var idUser;
        var nameUser;
        var tokenUser;
        var favoritePubs;
        var self = this;

        self.loginUser = function(password,email) {
            var login = {
                password:password,
                email:email
            };
            usersService.loginUser(login).then(function(response) {
                console.log(login);

                loginData = response.data.code;
                idUser = response.data.id;
                nameUser = response.data.data.name;
                tokenUser = response.data.data.token;
                favoriteUser= response.data.data.favorite_pubs;
                errorDescription = response.data.data.description;
                codeError =  response.data.data.code;
                name = response.data.data.name;
                responseError = response.data.result;

                if (responseError === "ERROR"){
                    switch (codeError) {
                    case 400:
                        console.log("Error: "+ codeError + " " + errorDescription);
                        alert("Asegurate de completar todos los datos y que estos sean validos");
                        break;

                    case 409:
                        console.log("Error: "+ codeError + " " + errorDescription);
                        alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                        break;

                    case 401:
                        console.log("Error: "+ codeError + " " + errorDescription);
                        alert("Asegurate de completar todos los datos y que estos sean validos");
                        break;

                    case 404:
                        console.log("Error: "+ codeError + " " + errorDescription);
                        alert("ERROR: Usuario no encontrado, asegurate de introducir los datos correctos o registrate");
                        break;

                    default:
                        alert("Error desconocido");
                        break;
                    }

                    return;
                }

                window.location.href= "/events";
                if (typeof(Storage) !== "undefined"){
                    sessionStorage.setItem("pickandgolToken", tokenUser);
                }
                alert("Usuario "+ response.data.data.name +" Logueado!! ");

            });
        };
    }
});