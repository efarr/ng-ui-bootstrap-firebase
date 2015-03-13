(function () {
    'use strict';

    angular.module('templateApp').factory('Authentication', Authentication);

    function Authentication($http, appSpinner, $rootScope, $firebaseAuth, FIREBASE_URL) {
        var service = {
            login: login,
            logout: logout,
            register: register
        };

        return service;

        function login(user){
            return $rootScope.auth.$authWithPassword({
                email: user.email,
                password: user.password
            }
        )};

        function logout(){
            return $rootScope.auth.$unauth()};

        function register(user){
            var ref = new Firebase(FIREBASE_URL);
            var auth = $firebaseAuth(ref);
            auth.$createUser({
                email: user.email,
                password: user.password
            }).then(function(userData){
                console.log("User " + userData.uid + " created successfully!");
            }).catch(function(error){
                console.error("Error: ", error);
            });
        }
    }
})();
