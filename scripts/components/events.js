
var ctrl = function (eventsService) {
    // this references context, this context is the one we need,
    // so we save it on self var
    var self = this;

    eventsService.getEvents() // Returns a promise
        .then(function (response) {

            // In 'data' property it's its body
            self.events = response.data.data;
        });

    // Get image path
    self.getImagePath = eventsService.getImagePath;

};

ctrl.$inject = ["eventsService"];

angular
    .module("pickandgol")
    .component("events", {
        // component view
        templateUrl: "views/events.html",
        controller: ctrl // Component logic
    });
