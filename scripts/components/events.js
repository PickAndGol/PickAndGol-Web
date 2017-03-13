
var ctrl = function (eventsService, angularDirPagination) {
    // this references context, this context is the one we need,
    // so we save it on self var
    var self = this;

    self.events = []; // declare an empty array
    self.pageno = 1; // initialize page no to 1
    self.total_count = 0;
    self.itemsPerPage = 12; //this could be a dynamic value from a drop down

    eventsService.getEvents() // Returns a promise
        .then(function (response) {

            // In 'data' property it's its body
            self.events = response.data.data;
        });

    // Get image path
    self.getImagePath = eventsService.getImagePath;

};

ctrl.$inject = ["eventsService", "angularUtils.directives.dirPagination"];

angular
    .module("pickandgol")
    .component("events", {
        // component view
        templateUrl: "views/events.html",
        controller: ctrl // Component logic
    });
