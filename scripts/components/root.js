
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
