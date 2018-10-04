(function() {
    'use strict';
    angular
        .module('AngularApp', ['ngMaterial', 'ngMessages']);
})();

(function() {
    'use strict';
    angular
        .module('AngularApp')
        .controller('AngularCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
            $scope.openLeftMenu = function() {
                $mdSidenav('left').toggle();
            };
        }])
})();
