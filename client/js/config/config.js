angular.module('ccApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html'
      })
      .when('/search-results', {
        templateUrl: '/templates/search-results.html',
        controller: 'ResultsController'
      })
      .when('/profile', {
        templateUrl: '/templates/profile.html'
      })
      .when('/edit-profile', {
        templateUrl: '/templates/edit-profile.html',
        controller: 'EditProfileController'
      })
  })
