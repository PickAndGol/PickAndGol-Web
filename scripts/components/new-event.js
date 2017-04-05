/**
 * Created by balate on 5/3/17.
 */

var ctrl = function (eventsService, AuthFactory){

    var self = this;

    self.saveEvent = function(name,date,description,category,pub) {

        let userIsLogged = AuthFactory.checkUserLogged();

        if (userIsLogged) {
            const token = AuthFactory.getUserToken();

            var event = {
                name: name,
                date: date,
                description: description,
                category: category,
                pub: pub,
                token: token
            };

            eventsService.saveEvent(event).then(function(response) {
                const errorDescription = response.data.data.description;
                const responseError = response.data.result;
                const codeError =  response.data.data.code;
                const nameEvent = event.name;

                if (responseError === "ERROR"){
                    console.log("Error: "+ codeError, errorDescription);

                    switch (codeError) {
                    case 400:
                        alert("Asegurate de completar todos los datos y que estos sean validos");
                        break;

                    case 409:
                        alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                        break;

                    case 404:
                        alert("ERROR: El evento debe estar asociado a un bar");
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

                alert("Evento "+ nameEvent +" creado!! ");
                window.location.href= "/events";

            })
            .catch((error) => {

                alert("Error desconocido");
                console.log("Error: ", error);
            });
        } else {
            alert ("Debe hacer login para crear un nuevo evento");
        }
    };


};

ctrl.$inject = [
    "eventsService",
    "categoriesService",
    "AuthFactory"
];

angular
    .module("pickandgol")
    .component("newEvent", {
        bindings: {
            $router: "<",
            pub: "<"
        },
        templateUrl: "views/event-register.html",
        controller: ctrl
    });



