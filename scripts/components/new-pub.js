/**
 * Created by balate on 3/4/17.
 */

var ctrl = function (pubsService, AuthFactory){

    var self = this;

    self.checkUserLogged = AuthFactory.checkUserLogged;

    self.savePub = function(name,longitude,latitude,urlWeb) {

        let userIsLogged = AuthFactory.checkUserLogged();

        if (userIsLogged) {
            const token = AuthFactory.getUserToken();

            var pub = {
                name: name,
                longitude:longitude,
                latitude:latitude,
                urlWeb:urlWeb,
                token:token
            };

            pubsService.savePub(pub).then(function(response) {
                const errorDescription = response.data.data.errmsg;
                const responseError = response.data.result;
                const codeError =  response.data.data.code;
                const namePub = pub.name;

                if (responseError === "ERROR"){
                    console.log("Error: "+ codeError, errorDescription);

                    switch (codeError) {
                    case 400:
                        alert("Asegurate de completar todos los datos y que estos sean validos");
                        break;

                    case 409:
                        alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                        break;

                    case 401:
                        alert("ERROR: Tu sesión ha expirado");
                        AuthFactory.logoutUser();
                        break;

                    default:
                        alert("Error desconocido");
                        break;
                    }

                    return;
                }

                alert("Bar "+ namePub +" creado!! ");
                window.location.href= "/events";

            })
            .catch((error) => {
                alert("Error desconocido");
                console.log("Error: "+ error);
            });
        } else {
            alert ("Debe hacer login para crear un nuevo bar");
        }

    };

};

ctrl.$inject = ["pubsService", "AuthFactory"];
angular
    .module("pickandgol")
    .component("newPub", {
        bindings: {
            $router: "<"
        },
        templateUrl: "views/pub-register.html",
        controller: ctrl
    });