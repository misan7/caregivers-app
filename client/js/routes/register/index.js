angular.module('ccApp')
    .config(function($routeProvider) {

        $routeProvider
            .when('/register', {
                templateUrl: '/js/routes/register/template.html',
                controller: 'RegisterController'
            })
    })