///**
// * Created by balate on 22/2/17.
// */
//angular.module("pickandgol")
//    .controller("UsersList", function($scope, ServiceBackend){
//
//    /*
//        ServiceBackend.getUser().then(function(response) {
//            $scope.users = response.data;
//        });
//*/
//
//        $scope.saveUser = function(name,password,email) {
//            var user = { name: name,
//                        password:password,
//                        email:email};
//            ServiceBackend.saveUser(user).then(function(response) {
//                console.log(user);
//               // $scope.user.push(response.data);
//                console.log("data....",response.data);
//                console.log("response full", response);
//
//                if(response.data.data.code === 400){
//                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
//                    alert("Asegurate de completar todos los datos y que estos sean validos");
//                }else if (response.data.data.code === 409){
//                    console.log("Error: "+ response.data.data.code + " " + response.data.data.description);
//                    alert("ERROR: Conflicto con el email introducido, este email ya esta registrado");
//                }else{
//                    alert("Usuario "+ user.name +" registrado!! ");
//                }
//
//            });
//        };
//    });
