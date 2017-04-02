/**
 * Created by balate on 30/3/17.
 */

angular
    .module("pickandgol")
    .directive("awsPicture", function() {
        return {
            restrict: "A",
            scope: {
                onSelect: "&",
                onDeselect: "&"
            },
            link: function(scope, element) {
                element.bind("change", function(event) {
                    if (event.target.files.length > 0) {
                        scope.onSelect({
                            $document: event.target.files[0]
                        });
                    }
                    else {
                        scope.onDeselect();
                    }
                    scope.$apply();
                });
            }
        }
    });