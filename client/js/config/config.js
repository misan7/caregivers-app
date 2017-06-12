angular.module('ccApp')

	.config(function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: '/templates/home.html',
				controller:'SearchController'
			})
			.when('/search-results/:location?', {
				templateUrl: '/templates/search-results.html',
				controller: 'ResultsController'
			})
			.when('/profile/:id', {
				templateUrl: '/templates/profile.html',
				controller: 'ProfileController'
			})
			.when('/edit-profile', {
				templateUrl: '/templates/edit-profile.html',
				controller: 'EditProfileController'
			})
	})
