
(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('communication', communication);

    function communication() {

        var sharedObject = {
            value: 0
        };
        
        var service = {
            sharedObject: sharedObject,
            giveMeFive: giveMeFive
        };
        return service;

        ////////////

        function giveMeFive() {
            sharedObject.value = sharedObject.value + 5;
        }
    }

}());
