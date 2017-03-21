/**
 * Created by balate on 28/2/17.
 */
angular.module("pickandgol").component("newUser",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/user-register.html",

    controller: function(usersService){

        var self = this;

        self.saveUser = function(name,password,email) {
            var user = { name: name,
                password:password,
                email:email};
            usersService.saveUser(user).then(function(response) {
                console.log(user);
                // $scope.user.push(response.data);
                console.log("data....",response.data);
                console.log("response full", response);
                errorDescription = response.data.data.description;
                codeError =  response.data.data.code;
                userName = user.name;

                if (codeError === 400){
                    console.log("Error: "+ codeError + " " + errorDescription);
                    alert("Asegurate de completar todos los datos y que estos sean validos");
                } else if (codeError === 409){
                    console.log("Error: "+ codeError + " " + errorDescription);
                    alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                } else {
                    alert("Usuario "+ userName +" registrado!! ");
                }

            });
        };
    }
});