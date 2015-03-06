(function () {
    'use strict';

    angular.module('templateApp').controller('Page1', Page1);

    /* @ngInject */
    function Page1() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }


    }
})();