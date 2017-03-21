
angular
    .module("pickandgol")
    .factory("urlConversionsFactory", function () {
        return {
            objectToUrlParams: function (obj) {
                return "?" + Object.keys(obj)
                    .reduce( function (a,k) {
                        a.push(k+'='+encodeURIComponent(obj[k]));
                        return a;
                    },[])
                    .join('&');
            }
        };
    });
