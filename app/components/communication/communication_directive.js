(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('pmCommunication', pmCommunication);


    function pmCommunication() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/communication/communication.html',
            // Own scope is important for view updates
            scope: {},
            controller: 'CommunicationController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

}());
