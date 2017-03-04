/**
 * Created by balate on 28/2/17.
 */
angular.module("pickandgol").component("root", {
    $routeConfig: [
    // Login
    {
        name: "Login",
        path: "/login",
        component: "newLogin"
    }, {
        name: "NewUser",
        path: "/new-user",
        component: "newUser",
    }],
    templateUrl: "views/root.html"
});