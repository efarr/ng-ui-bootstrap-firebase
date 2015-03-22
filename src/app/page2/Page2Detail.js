(function () {
    'use strict';

    angular
        .module('templateApp')
        .controller('Page2Detail', Page2Detail);

    Page2Detail.$inject = ['$routeParams', '$firebaseObject', 'FIREBASE_URL'];

    /* @ngInject */
    function Page2Detail($routeParams, $firebaseObject, FIREBASE_URL) {
        /* jshint validthis: true */
        var vm = this;

        vm.title = 'Meeting Detail';

        var ref = new Firebase(FIREBASE_URL + '/users/' + $routeParams.uid + '/meetings/' + $routeParams.meetingId);
        vm.meeting = $firebaseObject(ref);

        vm.meeting.$loaded(function(){
           vm.dateTime = new Date(vm.meeting.date);
        });
    }
})();