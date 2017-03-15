/**
 * Created by balate on 1/3/17.
 */
angular.module("pickandgol").component("newLogin",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/login.html",

    controller: function(usersService){

        var loginData;
        var idUser;
        var nameUser;
        var tokenUser;
        var favoriteUser;
        var self = this;

        self.loginUser = function(password,email) {
            var login = {password:password,
                        email:email};
            usersService.loginUser(login).then(function(response) {
                console.log(login);

                loginData = response.data.code;
                idUser = response.data.id;
                nameUser = response.data.data.name;
                tokenUser = response.data.data.token;
                favoriteUser= response.data.data.favorite_pubs;
                errorDescription = response.data.data.description;
                codeError =  response.data.data.code;
                name = response.data.data.name;

                //console.log("data....",response.data);
                //console.log("loginData....",loginData);
                //console.log("idUser....",idUser);
                //console.log("token....",tokenUser);
                //console.log("name....",nameUser);
                //console.log("favoritos....",favoriteUser);
                //console.log("response full", response);

                if(codeError === 400){
                    console.log("Error: "+ codeError + " " + errorDescription);
                    alert("Asegurate de completar todos los datos y que estos sean validos");
                }else if (codeError === 409){
                    console.log("Error: "+ codeError+ " " + errorDescription);
                    alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                }else if (codeError === 401){
                    console.log("Error: "+ codeError + " " + errorDescription);
                    alert("ERROR: Los datos no son correctos, comprueba que la contraseña o tu email son correctos.");
                }else if (codeError === 404){
                    console.log("Error: "+ codeError + " " + errorDescription);
                    alert("ERROR: Usuario no encontrado, asegurate de introducir los datos correctos o registrate");
                }
                else{
                    window.location.href= "/events";
                    if(typeof(Storage)!== "undefined"){
                        sessionStorage.setItem("pickandgolToken", tokenUser);
                    }
                    alert("Usuario "+ name +" Logueado!! ");
                }

            });
        };
    }
});