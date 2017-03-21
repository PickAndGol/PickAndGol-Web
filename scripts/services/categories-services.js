/**
 * Created by balate on 18/3/17.
 */
angular
    .module("pickandgol")
    .service("categoriesService", function ($http, Properties) {
        // All functionality that you want to export has to be published here

        this.getCategories = function () {
            return $http.get(Properties.serverUrl + Properties.endpointCategories);
        };

    });
