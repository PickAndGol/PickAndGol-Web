
angular
    .module("pickandgol")
    .directive("elementsMap", function () {
        return {
            // With restrict we indicate how to use the directive
            // A as attribute of an HTML element
            // E as HTML element
            restrict: "EA",
            // Directive view
            templateUrl: "views/elements-map.html",
            // Define communication interface between directive and parent scope (Controller / component)
            scope: {
                elements: "<"//,
                //onSelectedElement: "&" // Notify event to parent scope
            },
            // Establish directive logic or manipulate DOM in view
            link: function (scope) {

                console.log('scope',scope);



            }
        };
    });