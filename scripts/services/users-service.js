
angular
    .module("pickandgol")
    .service("usersService", function ($http, Properties, UserDefaults, AuthFactory) {
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
            const defaultPath = UserDefaults.defaultUserImage;

            return path || defaultPath;
        };

        this.getFavoritePubs = () => {
            const userIsLogged = AuthFactory.checkUserLogged();
            if (userIsLogged) {
                const userId = AuthFactory.getUserId();
                const token = AuthFactory.getUserToken();

                const url = Properties.serverUrl +
                        Properties.endpointUsers +
                        "/" + userId +
                        "/favorites" +
                        "?token="+ token;

                return $http.get(url);
            }
            return false;
        };

        this.getFavoritePubsIds = () => {

            let userIsLogged = AuthFactory.checkUserLogged();

            if (userIsLogged) {
                const userId = AuthFactory.getUserId();
                const token = AuthFactory.getUserToken();
                let url = Properties.serverUrl +
                            Properties.endpointUsers +
                            "/" + userId;
                url += "?token="+ token;

                $http.get(url).then((response)=>{
                    return response.data.data.favorite_pubs;
                })
                .catch((error) => {
                    return false;
                });
            } else {
                return false;
            }
        };

        this.addFavoritePub = (pubId) => {
            const userIsLogged = AuthFactory.checkUserLogged();
            if (userIsLogged) {
                const userId = AuthFactory.getUserId();
                const token = AuthFactory.getUserToken();

                const url = Properties.serverUrl +
                        Properties.endpointUsers +
                        "/" + userId +
                        "/favorites" +
                        "/" + pubId +
                        "?token="+ token;

                return $http.post(url);
            }
            return false;
        };

        this.deleteFavoritePub = (pubId) => {
            const userIsLogged = AuthFactory.checkUserLogged();
            if (userIsLogged) {
                const userId = AuthFactory.getUserId();
                const token = AuthFactory.getUserToken();

                const url = Properties.serverUrl +
                        Properties.endpointUsers +
                        "/" + userId +
                        "/favorites" +
                        "/" + pubId +
                        "?token="+ token;

                return $http.delete(url);
            }
            return false;
        };

    });
