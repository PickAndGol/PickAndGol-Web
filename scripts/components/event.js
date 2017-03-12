
var ctrl = function (eventsService, usersService, $sce) {
    // Save component reference
    var self = this;

    self.$routerOnActivate = function(next) {

        // Get Event Data
        var eventId = next.params.id;

        eventsService.getEvent(eventId)
            .then( function (response) {
                // General data
                self.eventData = response.data.data.event;

/*
                // Description (comes as HTML)
                self.eventDescription = $sce.trustAsHtml(
                    response.data.description);
                    */
            });

    };
/*
    // Future get favorite events
    self.$onInit = function () {
        self.favoriteEventts = eventsService.getFavoriteEventts();
    };
*/
    // Get image absolute path
    //self.getImagePath = eventsService.getImageAbsolutePath;

    // Manage favourite events
    //self.toggleFavorite = eventsService.toggleFavorite;

};


ctrl.$inject = ["eventsService", "usersService", "$sce"];

angular
    .module("pickandgol")
    .component("event", {
        templateUrl: "views/event.html",
        // 'bindings' Establish component communication interface
        bindings: {
            // get $router automatically from ng-outlet. It has to be that name
            $router: "<" // unidirectional binding, cannot be @ nor &
        },
        controller: ctrl // Component logic
    });