angular.module('ccApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
      })
      .when('/search-results', {
        templateUrl: '/templates/search-results.html',
      })
      .when('/profile', {
        templateUrl: '/templates/profile.html',
      })
  })