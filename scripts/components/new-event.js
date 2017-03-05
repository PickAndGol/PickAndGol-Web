/**
 * Created by balate on 5/3/17.
 */
angular.module("pickandgol").component("newEvent",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/event-register.html",

    controller: function(ServiceBackend){

        //TODO:get user token of webStorage while use token the last sesion any user with potsman.
        var usertoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YmM2YzY1ZWRmZjJmY2Y1MDM1NDM1NiIsImlhdCI6MTQ4ODc0MzUzOSwiZXhwIjoxNDg4NzQ0OTc5fQ.wKL42hwwHA6M6CzsZwH5TfUEqbih33X8r31VpewP7_s";
        //TODO:get id pub in details of bar, the user. Details Bar pending develop
        var userpub = "58a35d76b3d7d12f284557b5";

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
            ServiceBackend.saveEvent(event).then(function(response) {
                console.log(event);
                console.log("data....",response.data);
                console.log("response full", response);

                if(response.data.data.code === 400){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("Error 400");
                }else if (response.data.data.code === 409){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("ERROR: 409");
                }else{
                    alert("Evento "+ event.name +" creado!! ");
                }

            });
        };
    }
});