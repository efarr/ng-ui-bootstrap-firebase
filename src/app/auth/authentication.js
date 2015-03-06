(function () {
    'use strict';

    angular.module('templateApp').factory('Authentication', Authentication);

    function Authentication($http, appSpinner, $firebaseAuth, FIREBASE_URL) {
        var service = {
            login: login,
            register: register
        };

        return service;

        function login(user){
            alert("Logging in " + user.email + ' on ' + FIREBASE_URL);
        };

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
