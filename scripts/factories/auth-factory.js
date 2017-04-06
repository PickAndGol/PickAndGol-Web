
angular
    .module("pickandgol")
    .factory("AuthFactory", function () {
        const storageKey = "pickandgolToken";
        let isUserLogged = false;

        if (sessionStorage.getItem(storageKey)){
            isUserLogged = true;
        }

        const auth = {
            loginUser: (token) => {
                console.log('loginUser');
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
                console.log('isUserLogged',isUserLogged);
                return isUserLogged;
            }
        };
        return auth;
    });
