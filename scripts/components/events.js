
var ctrl = function (eventsService, usersService) {
    // this references context, this context is the one we need,
    // so we save it on self var
    var self = this;

    eventsService.getEvents() // Returns a promise
        .then(function (response) {
            // Get data
            self.events = response.data.data.items;
            self.totalEvents = response.data.data.total;
        });

    // Get image path
    self.getImagePath = eventsService.getImagePath;

};

ctrl.$inject = ["eventsService", "usersService"];

angular
    .module("pickandgol")
    .component("events", {
        // component view
        templateUrl: "views/events.html",
        controller: ctrl // Component logic
    });
