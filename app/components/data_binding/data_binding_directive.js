(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('pmDataBinding', pmDataBinding);


    function pmDataBinding() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/data_binding/data_binding.html',
            // Own scope is important for view updates
            scope: {},
            controller: 'DataBindingController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

}());
