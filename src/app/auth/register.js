(function () {
    'use strict';

    angular.module('templateApp').controller('Register', Register);

    Register.$inject = ['Authentication', '$location'];

    /* @ngInject */
    function Register(Authentication, $location) {
        /* jshint validthis: true */
        var vm = this;

        vm.register = register;

        function register() {
            Authentication.register(vm.user)
                .then(function() {$location.path("/page1")})
                .catch(function(err) {console.log(err)});
        }
    }
})();