/**
 * Created by balate on 5/3/17.
 */
angular.module("pickandgol").component("newEvent",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/event-register.html",

    controller: function(eventsService){

        //TODO:get user token of webStorage while use token the last sesion any user with potsman.
        var usertoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YzUzN2I0OTJiMzNkMDZhMTBjYTFlOSIsImlhdCI6MTQ4OTMyMDY5MCwiZXhwIjoxNDg5MzIyMTMwfQ.knyXIN-jOi8MfpSYH_avzC8GbRg8LabsVtMdt5vFeww";
        //TODO:get id pub in details of bar, the user. Details Bar pending develop
        var userpub = "58c53a9292b33d06a10ca1f4";
        //var userpub = "paquito";

        var self = this;


        self.saveEvent = function(name,date,description,category,pub,token) {
            pub = userpub;
            token = usertoken;

            var event = {   name: name,
                date:date,
                description:description,
                category:category,
                pub:pub,
                token:token};
            eventsService.saveEvent(event).then(function(response) {
                console.log(event);
                console.log("data....",response.data);
                console.log("response full", response);


                if(response.data.data.code === 400){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("Error 400");
                }else if (response.data.data.code === 409){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("ERROR: 409");
                }else if (response.data.data.code === 404){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("ERROR: 404, debes de añadir un pub");
                }else{
                    alert("Evento "+ event.name +" creado!! ");
                }

            });
        };
    }
});