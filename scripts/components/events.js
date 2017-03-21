

var ctrl = function (eventsService, usersService) {
    // this references context, this context is the one we need,
    // so we save it on self var
    var self = this;

    self.events = []; // declare an empty array
    self.pageNumber = 1; // initialize page no to 1
    self.totalEvents = 0;
    self.itemsPerPage = 12; //this could be a dynamic value from a drop down

    self.getEvents = (pageNumber) => {
        const start = (pageNumber -1) * self.itemsPerPage +1;
        const limit = self.itemsPerPage;

        let eventsFilters = {
            start: start,
            limit: limit
        };
        eventsService.getEvents(eventsFilters) // Returns a promise
            .then(function (response) {
                // Get data
                self.events = response.data.data.items;
                self.totalEvents = response.data.data.total;
            });
    };

    self.getEvents(self.pageNumber);

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
