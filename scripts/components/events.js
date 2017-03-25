

var ctrl = function (eventsService, categoriesService, EventDefaults) {
    // this references context, this context is the one we need,
    // so we save it on self var
    var self = this;

    // initialize events filters
    self.eventsFilters = {};

    self.categories = {};

    self.events = []; // declare an empty array
    self.pageNumber = 1; // initialize page no to 1
    self.totalEvents = 0;
    self.eventsPerPage = EventDefaults.eventsPerPage; //this could be a dynamic value from a drop down

    // Get events. Assumes filters already actualized
    self.getEvents = () => {
        eventsService.getEvents(self.eventsFilters) // Returns a promise
            .then( (response) => {
                // Get data
                self.events = response.data.data.items;
                self.totalEvents = response.data.data.total;
            });
    };

    // Get events with changed page
    self.getEventsInPage = (pageNumber) => {
        // Actualize self data
        self.pageNumber = pageNumber;

        // Get page filters
        const start = (pageNumber -1) * self.eventsPerPage;
        const limit = self.eventsPerPage;

        self.eventsFilters.start = start,
        self.eventsFilters.limit = limit;

        // Call to get Events with actualized filters
        self.getEvents();
    };

    // Get events with filter

    // Initial call to get events
    self.getEvents(self.pageNumber);

    // Initialize categories
    categoriesService.getCategories()
        .then((response) =>{
            self.categories = response.data.data.items;
        });

    // Get image path
    self.getImagePath = eventsService.getImagePath;

};

ctrl.$inject = [
    "eventsService",
    "categoriesService",
    "EventDefaults"
];

angular
    .module("pickandgol")
    .component("events", {
        // component view
        templateUrl: "views/events.html",
        controller: ctrl // Component logic
    });
