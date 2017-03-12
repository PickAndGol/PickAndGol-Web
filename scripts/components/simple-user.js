
var ctrl = function (usersService) {
    var self = this;

    self.getImagePath = usersService.getImagePath;
};

ctrl.$inject = ["usersService"];

angular
    .module("pickandgol")
    .component("simpleUser", {
        bindings: {
            $router: "<",
            userbasicdata: "<"
        },
        templateUrl: "views/simple-user.html",
        controller: ctrl
    });
