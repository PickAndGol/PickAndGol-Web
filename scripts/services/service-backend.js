/**
 * Created by balate on 22/2/17.
 */
angular.module("pickandgol").service("ServiceBackend", function($http){

    /*
    //get users collection.
    this.getUser = function(){
        //return $http.get("http://127.0.0.1:4000/api/v1/users");
        return $http.get("http://pickandgol.com/api/v1/users");
    };
*/
    //save new user
    this.saveUser = function(user){
        return $http.post("http://localhost:4000/api/v1/users/register", user);
        //return $http.post("http://pickandgol.com/api/v1/users/register", user);
    }
});