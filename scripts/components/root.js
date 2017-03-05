
angular
    .module("pickandgol")
    .component("root", {
        $routeConfig: [{
            name: "Events",
            path: "/events",
            component: "events",
            useAsDefault: true
        },
        {
            name: "Event",
            path: "/events/:id",
            component: "event"
        }],
        templateUrl: "views/root.html"
    });
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
        }],
    templateUrl: "views/root.html"
});