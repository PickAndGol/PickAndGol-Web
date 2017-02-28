/**
 * Created by balate on 28/2/17.
 */
angular.module("pickandgol").component("root", {
    $routeConfig: [
    //TODO: Login
    /*{
        name: "Login",
        path: "/user-login",
        component: "userLogin"
    },*/ {
        name: "NewUser",
        path: "/new-user",
        component: "newUser",
    }],
    templateUrl: "views/root.html"
});