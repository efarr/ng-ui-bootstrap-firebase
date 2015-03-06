(function () {
    'use strict';

    angular.module('templateApp').controller('Login', Login);

    Login.$inject = ['Authentication'];

    /* @ngInject */
    function Login(Authentication) {
        /* jshint validthis: true */
        var vm = this;

        vm.message = "Hello, there!"
        vm.login = login;

        function login() {
            Authentication.login(vm.user);
        }
    }
})();