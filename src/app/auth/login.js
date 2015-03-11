(function () {
    'use strict';

    angular.module('templateApp').controller('Login', Login);

    Login.$inject = ['Authentication', '$rootScope', '$location', '$firebaseAuth', 'FIREBASE_URL'];

    /* @ngInject */
    function Login(Authentication, $rootScope, $location, $firebaseAuth, FIREBASE_URL) {
        /* jshint validthis: true */
        var vm = this;

        vm.login = login;

        function login() {
            
            var ref = new Firebase(FIREBASE_URL);
            $rootScope.auth = $firebaseAuth(ref);

            Authentication.login(vm.user).then(function(authData){
                //alert("Logged in " + authData.uid);
                $location.path('/');
            }).catch(function(error){
                debugger
                console.log(error);
                var tmp = $rootScope.auth.getAuth();
                console.log(tmp);
            });
        }
    }
})();