/**
 * Created by balate on 1/3/17.
 */
angular.module("pickandgol").component("newLogin",{
    bindings:{
        $router:"<"
    },
    templateUrl: "views/login.html",

    controller: function(ServiceBackend){

        var loginData;
        var idUser;
        var nameUser;
        var tokenUser;
        var favoriteUser;
        var self = this;

        self.saveLogin = function(password,email) {
            var login = {password:password,
                        email:email};
            ServiceBackend.saveLogin(login).then(function(response) {
                console.log(login);
                loginData = response.data.data;
                idUser = response.data.data.id;
                nameUser = response.data.data.name;
                tokenUser = response.data.data.token;
                favoriteUser= response.data.data.favorite_pubs;
                //console.log("data....",response.data);
                //console.log("loginData....",loginData);
                //console.log("idUser....",idUser);
                //console.log("token....",tokenUser);
                //console.log("name....",nameUser);
                //console.log("favoritos....",favoriteUser);
                //console.log("response full", response);

                if(response.data.data.code === 400){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("Asegurate de completar todos los datos y que estos sean validos");
                }else if (response.data.data.code === 409){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("ERROR: Conflicto con el email o el usuario introducido, ya esta registrado. Pruebe hacer login antes");
                }else if (response.data.data.code === 401){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("ERROR: Los datos no son correctos, comprueba que la contraseña o tu email son correctos.");
                }else if (response.data.data.code === 404){
                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
                    alert("ERROR: Usuario no encontrado, asegurate de introducir los datos correctos o registrate");
                }
                else{
                    alert("Usuario "+ response.data.data.name +" Logueado!! ");
                }

            });
        };
    }
});