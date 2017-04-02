
angular
    .module("pickandgol")
    .directive("elementsSwiper", function () {
        return {
            // With restrict we indicate how to use the directive
            // A as attribute of an HTML element
            // E as HTML element
            restrict: "EA",
            // Directive view
            templateUrl: "views/elements-swiper.html",
            // Define communication interface between directive and parent scope (Controller / component)
            scope: {
                elements: "<"//,
                //onSelectedElement: "&" // Notify event to parent scope
            },
            // Establish directive logic or manipulate DOM in view
            link: function (scope) {

                 //scope.$onInit = () => {

                    //self.initializeSwiper = () => {
                        angular.element(document).ready(function () {
                            console.log('swiper');
                            console.log('scope.elements',scope.elements);
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
                            });
                            console.log('mySwiper',mySwiper);
                            //mySwiper.initObservers()
                        });
                    //};
                 //};



            }
        };
    });
