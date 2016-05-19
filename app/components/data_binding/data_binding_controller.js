(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('DataBindingController', DataBindingController);


    function DataBindingController(communication) {
        var vm = this;
        vm.show = true;

        vm.displayMagic = function () {
            alert('Here is the magic', vm.magic);
        };

        vm.toggleShow = function () {
             vm.show = !vm.show;
        };

        //////////// repeater demo

        vm.myOwnFoot = [
            {name: 'Sushi', description: 'Some fish'},
            {name: 'Spaghetti', description: 'Just pasta'},
            {name: 'Hoffmann', description: 'Best food ever'}
        ];

        ////////////// Service communication

        vm.sharedObject = communication.sharedObject;
        vm.highFive = function() {
            communication.giveMeFive();
        }
    }

}());
