angular.module('ccApp')
    .config(function($routeProvider) {

        $routeProvider
            .when('/logout', {
                template: '<h1>logouting...</h1>',
                controller: 'LogoutController'
            })
    })