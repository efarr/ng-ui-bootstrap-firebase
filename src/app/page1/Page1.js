(function () {
    'use strict';

    angular.module('templateApp').controller('Page1', Home);

    /* @ngInject */
    function Home() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }


    }
})();