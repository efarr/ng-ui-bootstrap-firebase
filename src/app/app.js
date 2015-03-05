(function () {
    'use strict';
    var app = angular.module('templateApp', [
        // Angular modules
        'ngRoute'

        // 3rd Party Modules

    ]);

    app.config(['$routeProvider', configRoutes]);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'Home',
                controllerAs: 'vm'
            }).when('/page1', {
                templateUrl: 'app/page1/page1.html',
                controller: 'Page1',
                controllerAs: 'vm'
            }).when('/page2', {
                templateUrl: 'app/page2/page2.html',
                controller: 'Home',
                controllerAs: 'vm'
            });


        $routeProvider.otherwise('/');
    }

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();