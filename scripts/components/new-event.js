/**
 * Created by balate on 5/3/17.
 */
angular.module("pickandgol").component("newEvent",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/event-register.html",

    controller: function(eventsService,categoriesService){
        // get token by sessionStorage
        var usertoken = sessionStorage.getItem('pickandgolToken');

        //TODO:get id pub in details of bar, the user. Details Bar pending develop
        var userpub = "58c53a9292b33d06a10ca1f4";

        var self = this;

       /* categoriesService.getCategories().then(function(response){
            //get categories
            //self.categories = response.data.data.items.name;
            var items = response.data.data;

            self.categories = response.data.data.items;
            console.log(response);
            console.log(items);
            console.log(self.categories);
        });*/

        self.saveEvent = function(name,date,description,category,pub,token) {
            pub = userpub;
            token = usertoken;
            //date = datee;

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
                errorDescription = response.data.data.description;
                codeError =  response.data.data.code;
                nameEvent = event.name;

                if(codeError=== 400){
                    console.log("Error: "+ codeError + " " + errorDescription);
                    alert("Error 400");
                }else if (codeError=== 409){
                    console.log("Error: "+ codeError + " " + errorDescription);
                    alert("ERROR: 409");
                }else if (codeError === 404){
                    console.log("Error: "+ codeError+ " " + errorDescription);
                    alert("ERROR: 404, debes de añadir un pub");
                }else{
                    alert("Evento "+ nameEvent +" creado!! ");
                    //window.location.href= "/events";
                }
            });
        };
    }
});


