// Module setter

angular.module(
    "pickandgol",
    [
        "ngComponentRouter"//,
        //"dahr.ng-haversine"
    ]);

// Configure provider $locationProvider.
// Establish navigation model HTML5 for Single Page Application to work
angular.module("pickandgol").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

// Indicate root component in '$routerRootComponent'
angular.module("pickandgol").value("$routerRootComponent", "root");
