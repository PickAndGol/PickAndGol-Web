/**
 * Created by balate on 1/3/17.
 */

var ctrl = function (usersService, AuthFactory) {
    var self = this;

    self.loginUser = function(password,email) {
        var login = {
            password:password,
            email:email
        };
        usersService.loginUser(login).then((response) => {

            var loginData = response.data.code;
            var idUser = response.data.id;
            var nameUser = response.data.data.name;
            var tokenUser = response.data.data.token;
            var favoritePubs = response.data.data.favorite_pubs;
            var errorDescription = response.data.data.description;
            var codeError =  response.data.data.code;
            var name = response.data.data.name;
            var responseError = response.data.result;

            if (responseError === "ERROR"){
                console.log("Error: "+ codeError + " " + errorDescription);

                switch (codeError) {
                    case 400:
                        alert("Asegurate de completar todos los datos y que estos sean validos");
                        break;

                    case 409:
                        alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                        break;

                    case 401:
                        alert("Asegurate de completar todos los datos y que estos sean validos");
                        break;

                    case 404:
                        alert("ERROR: Usuario no encontrado, asegurate de introducir los datos correctos o registrate");
                        break;

                    default:
                        alert("Error desconocido");
                        break;
                }

                return;
            }

            let userData = response.data.data;

            self.$router.navigate(["/Events"]);
            if (typeof(Storage) !== "undefined"){
                AuthFactory.loginUser(tokenUser, userData.id);
            }
            alert("Usuario "+ response.data.data.name +" Logueado!! ");

        })
        .catch((error) => {
            alert("Error desconocido");
            console.log("Error: "+ error);
        });
    };
};

ctrl.$inject = ["usersService", "AuthFactory"];

angular
    .module("pickandgol")
    .component("newLogin", {
        bindings: {
            $router: "<"
        },
        templateUrl: "views/login.html",
        controller: ctrl
    });

