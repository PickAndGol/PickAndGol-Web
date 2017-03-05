/**
 * Created by balate on 5/3/17.
 */
angular.module("pickandgol").component("newEvent",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/event-register.html",

    controller: function(ServiceBackend){

        var self = this;

        self.saveEvent = function(name,date,description,category,pub,token) {
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