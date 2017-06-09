angular.module('ccApp')

	.controller('ProfileController', function($scope, $rootScope, $routeParams, ApiService) {
		const id = $routeParams.id
		ApiService.getProfileById(id)
			.then( response => { 
				$scope.profile = response.data
			})
	})