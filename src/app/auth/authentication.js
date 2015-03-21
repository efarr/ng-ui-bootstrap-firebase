(function () {
    'use strict';

    angular.module('templateApp').factory('Authentication', Authentication);

    function Authentication($rootScope, $q, $timeout, $firebaseAuth, FIREBASE_URL) {
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

        function register(user) {
            var ref = new Firebase(FIREBASE_URL);
            var auth = $firebaseAuth(ref);
            return auth.$createUser({
                email: user.email,
                password: user.password
            })
                .then(function () {
                    // Authenticate so we can write profile data
                    return login(user)})
                .then(function (newUser) {
                    user.uid = newUser.uid;
                    return createProfile(user)})
                .then(function () {
                    return user;});


            function createProfile(user)
            {
                var ref = new Firebase(FIREBASE_URL + 'users/' + user.uid );
                var def = $q.defer();
                ref.set(
                    {
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        date: Firebase.ServerValue.TIMESTAMP
                    }, function(err) {
                    $timeout(function() {
                        if( err ) {
                            def.reject(err);
                        }
                        else {
                            def.resolve(ref);
                        }
                    })
                });
            }
        }
    }
})();
