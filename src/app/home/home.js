(function () {
    'use strict';

    angular.module('templateApp').controller('Home', Home);

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