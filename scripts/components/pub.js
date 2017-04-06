
var ctrl = function (pubsService, usersService, AuthFactory) {
    // Save component reference
    var self = this;

    self.$routerOnActivate = function(next) {

        // Get Pub Data
        var pubId = next.params.id;

        pubsService.getPub(pubId)
            .then( function (response) {
                // General data
                self.pubData = response.data.data;

                self.images = self.getImagesPath(self.pubData.photos);

                if (AuthFactory.checkUserLogged()
                    && self.pubData.creator) {

                    self.canGetUser = true;

                    usersService.getUser(self.pubData.creator)
                        .then((result)=>{
                            self.creatorData = result.data.data;
                        });
                }
            });

        // Get images
        self.getMainImagePath = pubsService.getMainImagePath;
        self.getImagesPath = pubsService.getImagesPath;

        self.checkUserLogged = AuthFactory.checkUserLogged;
    };

/*
    // Future get favorite pubs
    self.$onInit = function () {
        self.favoritePubs = pubsService.getFavoritePubs();
    };
*/

    // Manage favourite pubs
    //self.toggleFavorite = pubsService.toggleFavorite;

};


ctrl.$inject = [
    "pubsService",
    "usersService",
    "AuthFactory",
    "$sce"
];

angular
    .module("pickandgol")
    .component("pub", {
        templateUrl: "views/pub.html",
        // 'bindings' Establish component communication interface
        bindings: {
            // get $router automatically from ng-outlet. It has to be that name
            $router: "<" // unidirectional binding, cannot be @ nor &
        },
        controller: ctrl // Component logic
    });