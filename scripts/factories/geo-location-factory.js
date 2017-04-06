
angular
    .module("pickandgol")
    .factory("GeoLocationFactory", function () {
        return {
            getCurrentLocation: () => { // Returns a promise
                let locationPromise = new Promise((resolve, reject) => {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            (data) => {
                                resolve(data.coords);
                            }
                        );
                    } else {
                        reject({error: "Cannot get position"});
                    }
                });

                return locationPromise;
            }
        };
    });
