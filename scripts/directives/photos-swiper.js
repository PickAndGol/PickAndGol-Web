
angular
    .module("pickandgol")
    .directive("photosSwiper", function () {
        return {
            // With restrict we indicate how to use the directive
            // A as attribute of an HTML element
            // E as HTML element
            restrict: "EA",
            // Directive view
            templateUrl: "views/photos-swiper.html",
            // Define communication interface between directive and parent scope (Controller / component)
            scope: {
                photos: "<"//,
                //onSelectedElement: "&" // Notify event to parent scope
            },
            // Establish directive logic or manipulate DOM in view
            link: function (scope) {
                scope.$watch('photos', function (photos) {
                    // Check if Swiper is needed
                    if (scope.photos && scope.photos.length >1){
                        // Bind document ready
                        angular.element(document).ready(function () {
                            console.log('scope.photos',scope.photos);

                            // Swiper
                            const imagesSwiper = new Swiper ('.swiper-container', {
                                // Optionals
                                loop: true,
                                observer: true,
                                updateOnImagesReady: true,

                                // Pagination
                                pagination: '.swiper-pagination',
                                paginationClickable: true,

                                // Navigation arrows
                                nextButton: '.swiper-button-next',
                                prevButton: '.swiper-button-prev',
                            });
                        });
                    }
                });
            }
        };
    });
