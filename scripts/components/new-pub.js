/**
 * Created by balate on 3/4/17.
 */

var ctrl = function (pubsService){
    // get token by sessionStorage
    var usertoken = sessionStorage.getItem('pickandgolToken');

    var self = this;

    self.savePub = function(name,longitude,latitude,urlWeb,token) {

        token = usertoken;

        var pub = {   name: name,
            longitude:longitude,
            latitude:latitude,
            urlWeb:urlWeb,
            token:token};
        pubsService.savePub(pub).then(function(response) {
            console.log(pub);
            console.log("data....",response.data);
            console.log("response full", response);
            var errorDescription = response.data.data.errmsg;
            var codeError =  response.data.data.code;
            var namePub = pub.name;

            if(codeError=== 400){
                console.log("Error: "+ codeError + " " + errorDescription);
                alert("Error 400");
            }else if (codeError=== 409){
                console.log("Error: "+ codeError + " " + errorDescription);
                alert("ERROR: 409");
            }else if (codeError === 404){
                console.log("Error: "+ codeError+ " " + errorDescription);
                alert("ERROR: 404, debes de añadir un pub");
            }else if (codeError === 500){
                console.log("Error: "+ codeError+ " " + errorDescription);
            }

            else{
                alert("Pubs "+ namePub +" creado!! ");
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