// Module setter

angular.module(
    "pickandgol",
    [
        "ngComponentRouter",
        "angularUtils.directives.dirPagination",
        "uiGmapgoogle-maps"
    ])
    // Google maps configuration
    .config(function (uiGmapGoogleMapApiProvider) {
        console.log('uiGmapGoogleMa<pApiProvider',uiGmapGoogleMapApiProvider);
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDzFRbyBLw75vAAOslsRP5Z7ejnz0uUnSo',
            //v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    });

// Configure provider $locationProvider.
// Establish navigation model HTML5 for Single Page Application to work
angular.module("pickandgol").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

// Indicate root component in '$routerRootComponent'
angular.module("pickandgol").value("$routerRootComponent", "root");
