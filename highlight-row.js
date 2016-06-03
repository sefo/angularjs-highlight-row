function highlightRow() {
    return {
        scope: {},
        bindToController: {
            donnee: '=',
            model: '='
        },
        controller: 'HighlightRowController as ctrl',
        restrict: 'A',
        link: function ($scope, $element, $attrs, $ctrl) {
            var element = $element[0];
            element.addEventListener('click', function(event) {
                $('.row-highlight').removeClass('highlight');
                $element.addClass('highlight');
                $ctrl.model = $ctrl.donnee.donnee1 + " " + $ctrl.donnee.donnee2; //event.target.innerText;
                $scope.$apply();
            });
        }
    };
}

function HighlightRowController() {
    this.boo = "far";
}

angular
    .module('app')
    .directive('highlightRow', highlightRow)
    .controller('HighlightRowController', HighlightRowController);