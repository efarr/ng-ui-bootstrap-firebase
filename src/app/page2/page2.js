(function () {
    'use strict';

    angular
        .module('templateApp')
        .controller('Page2', Page2);

    Page2.$inject = ['$rootScope', '$firebaseArray', 'FIREBASE_URL'];

    /* @ngInject */
    function Page2($rootScope, $firebaseArray, FIREBASE_URL)
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.addMeeting = addMeeting;
        vm.title = 'Page2';

        activate();

        ////////////////
        if ($rootScope.auth.$getAuth())
        {
            var meetingsRef = new Firebase(FIREBASE_URL + '/users/' + $rootScope.auth.$getAuth().uid + '/meetings');
            vm.meetings = $firebaseArray(meetingsRef);
        }

        function activate() {
        }

        function addMeeting() {
            vm.meetings.$add({
                name: vm.meetingname,
                date: Firebase.ServerValue.TIMESTAMP
            }).then(function() {
                vm.meetingname = '';
            });
        }

    }
})();