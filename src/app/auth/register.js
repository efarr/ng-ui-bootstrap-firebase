(function () {
    'use strict';

    angular.module('templateApp').controller('Register', Register);

    Register.$inject = ['Authentication'];

    /* @ngInject */
    function Register(Authentication) {
        /* jshint validthis: true */
        var vm = this;

        vm.register = register;

        function register() {
            Authentication.register(vm.user);
        }
    }
})();