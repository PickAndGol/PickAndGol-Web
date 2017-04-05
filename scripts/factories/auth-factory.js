
angular
    .module("pickandgol")
    .factory("AuthFactory", function () {
        const storageKey = "pickandgolToken";
        let isUserLogged = false;

        const auth = {
            loginUser: (token) => {
                sessionStorage.setItem(storageKey, token);
                isUserLogged = true;
            },
            getUserToken: () => {
                return sessionStorage.getItem(storageKey);
            },
            logoutUser: () => {
                localStorage.removeItem(storageKey);
                isUserLogged = true;
            },
            checkUserLogged: () => {
                return isUserLogged;
            }
        };
        return auth;
    });
