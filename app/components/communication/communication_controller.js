(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('CommunicationController', CommunicationController);


    function CommunicationController(communication) {
        var vm = this;
        
        vm.sharedObject = communication.sharedObject;
    }

}());
