(function () {

    'use strict';
    angular.module('app')
    .controller('BodyCtrl', function ($scope, alertService, BOWER) {
        $scope.app_name = BOWER.name;
    });
})();
