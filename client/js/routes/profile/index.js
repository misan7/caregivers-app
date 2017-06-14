angular.module('ccApp')
    .config(function($routeProvider) {

        $routeProvider
            .when('/profile', {
                templateUrl: '/js/routes/profile/template.html',
                controller: 'ProfileController',
                secure: true
            })
    })