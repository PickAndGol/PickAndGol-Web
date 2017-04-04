
angular
    .module("pickandgol")
    .component("root", {
        $routeConfig: [
            // Users
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
            // Events
            {
                name: "Events",
                path: "/events",
                component: "events",
                useAsDefault: true
            },
            {
                name: "Event",
                path: "/events/:id",
                component: "event"
            },
            {
                name: "NewEvent",
                path: "/new-event",
                component: "newEvent"
            },
            // Pubs
            {
                name: "Pubs",
                path: "/pubs",
                component: "pubs"
            },
            {
                name: "Pub",
                path: "/pubs/:id",
                component: "pub"
            },
            {
                name: "NewPub",
                path: "/register-pub/",
                component: "newPub"
            },

        ],
        templateUrl: "views/root.html"
    });
