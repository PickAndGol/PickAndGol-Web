
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

                        const mapDom = document.getElementsByClassName('elements-map')[0];

                        let map = new google.maps.Map(mapDom);

                        let infowindow = new google.maps.InfoWindow({
                            content: ''
                        });

                        let markerBounds = new google.maps.LatLngBounds();

                        let pendingMarkers = elements.length;

                        _.each(elements, (element) => {
                            if (element.location){
                                let location = element.location.coordinates;

                                let point = new google.maps.LatLng(
                                    location[1],
                                    location[0]);
                                // Draw a marker for each random point
                                let marker = new google.maps.Marker({
                                    position: point,
                                    map: map,
                                    title: element.name
                                });

                                // Add infowindow to each marker
                                google.maps.event.addListener(marker, 'click', function() {
                                    infowindow.setContent(element.name);
                                    infowindow.open(map, marker);
                                });

                                // Extend markerBounds with each random point.
                                markerBounds.extend(point);

                                if (--pendingMarkers === 0){
                                    if (elements.length === 1){
                                        map.setCenter(markerBounds.getCenter());
                                        map.setZoom(16);
                                    } else {
                                        map.fitBounds(markerBounds);
                                    }
                                }
                            }
                        });
                    }
                });
            }
        };
    });