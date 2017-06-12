angular.module('ccApp')

	.controller('ResultsController', function($scope, $rootScope, $routeParams, ApiService) {
		$rootScope.section = "search-results"
		$rootScope.profile = "profile"
		const location = $routeParams.location
		if(location){
		ApiService.getProfilesByLocation(location)
			.then(profiles => $scope.profiles = profiles)
		}
		else {
			ApiService.getAllProfiles()
			.then(profiles => $scope.profiles = profiles)
		}
	})