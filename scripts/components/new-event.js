/**
 * Created by balate on 5/3/17.
 */


var ctrl = function (eventsService){

    // get token by sessionStorage
    var usertoken = sessionStorage.getItem('pickandgolToken');

    //TODO:get id pub in details of bar, the user. Details Bar pending develop
    var userpub = "58c53a9292b33d06a10ca1f4";

    var self = this;

    self.saveEvent = function(name,date,description,category,pub,token) {
        pub = userpub;
        token = usertoken;
        //date = datee;

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
                console.log("Error: "+ codeError + " " + errorDescription);

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
            const errorDescription = error.data.data.description;
            const responseError = error.data.result;
            const codeError =  error.data.data.code;

            alert("Error desconocido");
            console.log("Error: "+ error);
        });
    };
};

ctrl.$inject = ["eventsService",
                "categoriesService"];
angular
    .module("pickandgol")
    .component("newEvent", {
        bindings: {
            $router: "<"
        },
        templateUrl: "views/event-register.html",
        controller: ctrl
    });



