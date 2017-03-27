

var ctrl = function (pubsService, PubDefaults) {
    // this references context, this context is the one we need,
    // so we save it on self var
    var self = this;

    // initialize pubs filters
    self.pubsFilters = {};

    // Initialize pagination
    self.pubs = []; // declare an empty array
    self.pageNumber = 1; // initialize page no to 1
    self.totalPubs = 0;
    self.pubsPerPage = PubDefaults.pubsPerPage; //this could be a dynamic value from a drop down

    // Get pubs. Assumes filters already actualized
    self.getPubs = () => {
        pubsService.getPubs(self.pubsFilters) // Returns a promise
            .then( (response) => {
                // Get data
                self.pubs = response.data.data.items;
                self.totalPubs = response.data.data.total;
            });
    };

    // Get pubs with changed page
    self.getPubsInPage = (pageNumber) => {
        // Actualize self data
        self.pageNumber = pageNumber;

        // Get page filters
        const start = (pageNumber -1) * self.pubsPerPage;
        const limit = self.pubsPerPage;

        self.pubsFilters.start = start,
        self.pubsFilters.limit = limit;

        // Call to get Pubs with actualized filters
        self.getPubs();
    };

    // Get pubs with filter

    // Initial call to get pubs
    self.getPubs(self.pageNumber);

    // Get image path
    self.getImagePath = pubsService.getImagePath;

};

ctrl.$inject = [
    "pubsService",
    "PubDefaults"
];

angular
    .module("pickandgol")
    .component("pubs", {
        // component view
        templateUrl: "views/pubs.html",
        bindings: {
            // get $router automatically from ng-outlet. It has to be that name
            $router: "<" // unidirectional binding, cannot be @ nor &
        },
        controller: ctrl // Component logic
    });
