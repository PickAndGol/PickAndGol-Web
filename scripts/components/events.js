

var ctrl = function (eventsService, EventDefaults) {
    // this references context, this context is the one we need,
    // so we save it on self var
    var self = this;

    // initialize events filters
    self.eventsFilters = {};

    self.events = []; // declare an empty array
    self.pageNumber = 1; // initialize page no to 1
    self.totalEvents = 0;
    self.eventsPerPage = EventDefaults.eventsPerPage; //this could be a dynamic value from a drop down

    self.getEvents = (pageNumber) => {
        const start = (pageNumber -1) * self.eventsPerPage;
        const limit = self.eventsPerPage;

        self.eventsFilters.start = start,
        self.eventsFilters.limit = limit;

        eventsService.getEvents(self.eventsFilters) // Returns a promise
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

ctrl.$inject = [
    "eventsService",
    "EventDefaults"
];

angular
    .module("pickandgol")
    .component("events", {
        // component view
        templateUrl: "views/events.html",
        controller: ctrl // Component logic
    });
