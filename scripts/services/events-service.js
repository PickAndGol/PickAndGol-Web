
angular
    .module("pickandgol")
    .service("eventsService", function ($http, Properties, UrlConversionsFactory) {
        // All functionality that you want to export has to be published here

        this.getEvents = function (filters) {
            let url = Properties.serverUrl
                + Properties.endpointEvents;

            if (filters && Object.keys(filters).length > 0){
                url += UrlConversionsFactory.objectToUrlParams(filters);
            }

            return $http.get(url);
        };

        this.getEvent = (eventId) => {
            return $http.get(Properties.serverUrl + Properties.endpointEvents + "/" + eventId);
        };

        this.getImagePath = function (path) {
            const defaultPath = '/static/events/default-match.jpg';

            return path || defaultPath;
        };

        this.saveEvent = function (event) {
            return $http.post(Properties.serverUrl +
                Properties.endpointEvents,
                event);
        };



        // Save product example:
        /*
        this.saveProduct = function (product, image) {

            var promise;

            if (image) {
                // Image exists
                // Create 'FormData' (standard HTML5) with image
                var data = new FormData();
                data.append("image", image);

                // Configure request 'Content-Type' as undefined (so Angular.js will infer request type)
                var configuration = {
                    "headers": {
                        "Content-Type": undefined
                    }
                };

                // Upload image to server
                promise = $http.post(
                    Properties.serverUrl + Properties.endpointImages,
                    data,
                    configuration
                )
                    .then(function (response) {
                        // Server returns json, with uploaded file relative path
                        var path = response.data.path;

                        // Establish img path before saving
                        product.imagePath = path;

                        return $http.post(Properties.serverUrl + Properties.endpoint, product);
                    });

            } else {
                // Image undefined
                promise = $http.post(Properties.serverUrl + Properties.endpoint, product);
            }
            return promise;
        };

        this.getImageAbsolutePath = function (relativePath) {
            return (relativePath)
                ? ("http://localhost:8000/" + relativePath)
                : undefined;
        };
    });
*/

    });
