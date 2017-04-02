/**
 * Created by balate on 30/3/17.
 */
angular.module("pickandgol").directive("awsPicture", function () {
    return {
        restrict: 'AE',
        templateUrl: "views/form-picture.html",
        scope: {
            file: '@'
        },
        link: function(scope, el, attrs){
            el.bind('change', function(event){
                var files = event.target.files;
                var file = files[0];
                scope.file = file;
                scope.$parent.file = file;
                scope.$apply();
            });
        }
    }

});
