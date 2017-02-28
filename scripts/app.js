/**
 * Created by balate on 21/2/17.
 */

angular.module("pickandgol", ["ngComponentRouter"]);

angular.module("pickandgol").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

angular.module("pickandgol").value("$routerRootComponent", "root");