
var ctrl = function (usersService, AuthFactory) {
    // Save component reference
    var self = this;

    self.$routerOnActivate = function(next) {

        // Get User Data
        let userId = next.params.id;

        self.userData = {};
        self.userData.name = "Usuario de PickAndGol";
        self.image = self.getImagePath(self.userData.photo_url);

        if (AuthFactory.checkUserLogged()) {
            if (!userId) {
                userId = AuthFactory.getUserId();
            }
            usersService.getUser(userId)
                .then( function (response) {
                    // General data
                    self.userData = response.data.data;
                    console.log('self.userData',self.userData);

                    self.image = self.getImagePath(self.userData.photo_url);
                });
        }
    };

    // Get image
    self.getImagePath = usersService.getImagePath;

    self.checkUserLogged = AuthFactory.checkUserLogged;

};

ctrl.$inject = [
    "usersService",
    "AuthFactory"
];

angular
    .module("pickandgol")
    .component("user", {
        bindings: {
            $router: "<",
        },
        templateUrl: "views/user.html",
        controller: ctrl
    });
