
angular
    .module("pickandgol")
    .directive("elementsMap", function () {
        return {
            // With restrict we indicate how to use the directive
            // A as attribute of an HTML element
            // E as HTML element
            restrict: "EA",
            // Directive view
            templateUrl: "views/elements-map.html",
            // Define communication interface between directive and parent scope (Controller / component)
            scope: {
                elements: "<"//,
                //onSelectedElement: "&" // Notify event to parent scope
            },
            // Establish directive logic or manipulate DOM in view
            link: function (scope) {

                scope.$watch('elements', function (elements) {

                    if (elements && elements[0]){

                        let markers = _.map(elements, 'location.coordinates');

                        let map = new google.maps.Map(document.getElementsByClassName('elements-map')[0], {
                            zoom: 80
                            //center: {lat: -34.397, lng: 150.644},
                        });

                        let markerBounds = new google.maps.LatLngBounds();

                        let pendingMarkers = markers.length;

                        _.each(markers, (marker) => {
                            let point = new google.maps.LatLng(
                                marker[0],
                                marker[1]);
                            // Draw a marker for each random point
                            new google.maps.Marker({
                                position: point,
                                map: map
                            });

                            // Extend markerBounds with each random point.
                            markerBounds.extend(point);

                            if (--pendingMarkers === 0){
                                if (markers.length === 1){
                                    map.setCenter(markerBounds.getCenter());
                                    map.setZoom(16);
                                } else {
                                    map.fitBounds(markerBounds);
                                }
                            }
                        });
                    }

                });
            }
        };
    });