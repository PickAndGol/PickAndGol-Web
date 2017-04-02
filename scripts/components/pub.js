
var ctrl = function (pubsService, usersService) {
    // Save component reference
    var self = this;

    self.$routerOnActivate = function(next) {

        // Get Pub Data
        var pubId = next.params.id;

        pubsService.getPub(pubId)
            .then( function (response) {
                // General data
                self.pubData = response.data.data;

                if (self.pubData.photos && self.pubData.photos.length > 1){
                    self.initializeSwiper();
                }

                const token = sessionStorage.getItem('pickandgolToken');
                if (token && self.pubData.creator){
                    self.canGetUser = true;

                    usersService.getUser(self.pubData.creator)
                        .then((result)=>{
                            self.creatorData = result.data.data;
                        });
                }
            });

        // Get image
        self.getMainImagePath = pubsService.getMainImagePath;

        self.initializeSwiper = () => {
            angular.element(document).ready(function () {
                console.log('swiper');
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true,
                    observer: true,
                    updateOnImagesReady: true,

                    // If we need pagination
                    pagination: '.swiper-pagination',
                    paginationClickable: true,

                    // Navigation arrows
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',

                    // And if we need scrollbar
                    //scrollbar: '.swiper-scrollbar',
                });
                console.log('mySwiper',mySwiper);
            });
        };

    };

/*
    // Future get favorite pubs
    self.$onInit = function () {
        self.favoritePubs = pubsService.getFavoritePubs();
    };
*/
    // Get image absolute path
    //self.getImagePath = pubsService.getImageAbsolutePath;

    // Manage favourite pubs
    //self.toggleFavorite = pubsService.toggleFavorite;

};


ctrl.$inject = ["pubsService", "usersService", "$sce"];

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