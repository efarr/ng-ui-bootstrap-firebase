(function () {
    'use strict';

    angular.module('templateApp').controller('Page1', Page1);

    /* @ngInject */
    function Page1($http) {
        /* jshint validthis: true */
        var vm = this;

        vm.getQuote = getQuote;

        function getQuote() {
            $http.get('http://www.google.com/finance/info?nfotype=infoquoteall&callback=?&q=' + vm.ticker).
                success(function(data, status, headers, config) {
                    console.log(data);
                    console.log(data.substring(3));
                    vm.result = JSON.parse(data.substring(3))[0]
                }).
                error(function(data, status, headers, config) {
                    console.log('Error: ' + data);
                });
        }
    }
})();