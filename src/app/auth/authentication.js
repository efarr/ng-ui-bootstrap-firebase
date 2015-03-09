(function () {
    'use strict';

    angular.module('templateApp').factory('Authentication', Authentication);

    function Authentication($http, appSpinner, $rootScope, $firebaseAuth, FIREBASE_URL) {
        var service = {
            login: login,
            register: register
        };

        return service;

        function login(user){
            return $rootScope.auth.$authWithPassword({
                email: user.email,
                password: user.password
            }/*) .then(function(authData) {
            }).catch( function(error) {
                if (error = 'INVALID_EMAIL') {
                    console.log('email invalid or not signed up — trying to sign you up!');
                } else if (error = 'INVALID_PASSWORD') {
                    console.log('wrong password!');
                } else {
                    console.log(error);
                }
            }*/
        )};

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
