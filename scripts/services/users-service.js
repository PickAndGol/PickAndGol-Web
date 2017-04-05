
angular
    .module("pickandgol")
    .service("usersService", function ($http, Properties, AuthFactory) {
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
            let url = Properties.serverUrl +
                        Properties.endpointUsers +
                        "/" + userId;

            let userIsLogged = AuthFactory.checkUserLogged();

            if (userIsLogged) {
                const token = AuthFactory.getUserToken();
                url += "?token="+ token;
            }

            return $http.get(url);
        };

        this.getImagePath = function (path) {
            const defaultPath = '/static/users/default-user.png';

            return path || defaultPath;
        };

    });
