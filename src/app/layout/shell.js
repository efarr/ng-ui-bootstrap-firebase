(function () {
    'use strict';

    angular.module('templateApp').controller('Shell', Shell);

    Shell.$inject = ['Authentication', '$rootScope', '$location', '$firebaseAuth', 'FIREBASE_URL'];

    function Shell(Authentication, $rootScope, $location, $firebaseAuth, FIREBASE_URL) {
        /* jshint validthis:true */
        var vm = this;

        vm.showSpinner = false;
        vm.spinnerMessage = 'Retrieving data...';
        vm.login = login;

        vm.spinnerOptions = {
            radius: 40,
            lines: 8,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#428bca'
        };

        activate();

        function activate() {
            var ref = new Firebase(FIREBASE_URL);
            $rootScope.auth = $firebaseAuth(ref);
        }

        $rootScope.$on('spinner.toggle', function (event, args) {
            vm.showSpinner = args.show;
            if (args.message) {
                vm.spinnerMessage = args.message;
            }
        });

        function login() {
            Authentication.login(vm.user).then(function(authData){
                //alert("Logged in " + authData.uid);
                $location.path('/');
            }).catch(function(error){
                console.log(error);
                var tmp = $rootScope.auth.getAuth();
                console.log(tmp);
            });
        }
    }
})();