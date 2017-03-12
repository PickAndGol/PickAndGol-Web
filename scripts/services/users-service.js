
angular
    .module("pickandgol")
    .service("usersService", function ($http, Properties) {
        // All functionality that you want to export has to be published here

        this.saveUser = function (user) {
            return $http.post(Properties.serverUrl +
                Properties.endpointUsers +
                '/register' ,
                user);
        };

        this.loginUser = function (login) {
            return $http.post(Properties.serverUrl +
                Properties.endpointUsers +
                '/login' ,
                login);
        };

        this.recoverUser = function (user) {
            return $http.post(Properties.serverUrl +
                Properties.endpointUsers +
                '/recover' ,
                user);
        };

        this.getUser = (userId) => {
            const token = sessionStorage.getItem('pickandgolToken');
            //if (token) {
            return $http.get(Properties.serverUrl +
                    Properties.endpointUsers +
                    "/" + userId
                    + "?token="+ token);
            //}
            //return;
        };

        this.getImagePath = function (path) {
            const defaultPath = '/static/users/default-user.png';

            return path || defaultPath;
        };

    });
