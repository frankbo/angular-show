(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('pmLoops', pmLoops);


    function pmLoops() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/data_binding/loops/loops.html',
            scope: {
                food: '='
            },
            controller: 'LoopsController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

}());
