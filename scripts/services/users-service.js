
angular
    .module("pickandgol")
    .service("usersService", function ($http, Properties) {
        // All functionality that you want to export has to be published here

        this.saveUser = function (user) {
            return $http.post(Properties.serverUrl +
                Properties.endpointUsers +
                '/register' +
                user);
        };

        this.loginUser = function (user) {
            return $http.post(Properties.serverUrl +
                Properties.endpointUsers +
                '/login' +
                user);
        };

        this.recoverUser = function (user) {
            return $http.post(Properties.serverUrl +
                Properties.endpointUsers +
                '/recover' +
                user);
        };

    });
