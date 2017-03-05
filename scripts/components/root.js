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
        },
        {
            name: "Recover",
            path: "/recover-user",
            component: "recover",
        },
        {
            name: "NewEvent",
            path: "/new-event",
            component: "newEvent",
        }],
    templateUrl: "views/root.html"
});