/**
 * Created by balate on 3/4/17.
 */

var ctrl = function (pubsService){
    // get token by sessionStorage
    var usertoken = sessionStorage.getItem('pickandgolToken');

    var self = this;

    self.savePub = function(name,urlPhoto,longitud,latitud,urlWeb,ownerId,token) {
        ownerId = '0000000';
        token = usertoken;

        var pub = {   name: name,
            urlPhoto:urlPhoto,
            longitud:longitud,
            latitud:latitud,
            urlWeb:urlWeb,
            ownerId:ownerId,
            token:token};
        pubsService.savePub(pub).then(function(response) {
            console.log(pub);
            console.log("data....",response.data);
            console.log("response full", response);
            var errorDescription = response.data.data.description;
            var codeError =  response.data.data.code;
            var nameEvent = pub.name;

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
                alert("Pubs "+ nameEvent +" creado!! ");
                window.location.href= "/pubs";
            }
        });
    };
}

ctrl.$inject = ["pubsService"];
angular
    .module("pickandgol")
    .component("newPub", {
        bindings: {
            $router: "<"
        },
        templateUrl: "views/pub-register.html",
        controller: ctrl
    });