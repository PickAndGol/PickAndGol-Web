
angular
    .module("pickandgol")
    .factory("AuthFactory", function () {
        const tokenKey = "pickandgolToken";
        const userIdKey = "pickandgolAuthUser";
        let isUserLogged = false;

        if (sessionStorage.getItem(tokenKey)){
            isUserLogged = true;
        }

        const auth = {
            loginUser: (token, userId) => {
                sessionStorage.setItem(tokenKey, token);
                sessionStorage.setItem(userIdKey, userId);
                isUserLogged = true;
            },
            getUserToken: () => {
                return sessionStorage.getItem(tokenKey);
            },
            getUserId: () => {
                return sessionStorage.getItem(userIdKey);
            },
            logoutUser: () => {
                localStorage.removeItem(tokenKey);
                localStorage.removeItem(userIdKey);
                isUserLogged = false;
            },
            checkUserLogged: () => {
                return isUserLogged;
            }
        };
        return auth;
    });
