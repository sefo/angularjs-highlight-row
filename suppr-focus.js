function supprFocus() {
    return {
        restrict: 'A',
        link: function ($scope, $element) {
            var element = $element[0];
            element.addEventListener('focus', function() {
                $element.removeClass('focus');
            });
            element.addEventListener('blur', function() {
                $element.addClass('focus');
            });
        }
    };
}

angular
    .module('app')
    .directive('supprFocus', supprFocus);