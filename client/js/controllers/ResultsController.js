angular.module('ccApp')

	.controller('ResultsController', function($scope, $rootScope, ApiService) {
		$rootScope.section = "search-results"
		$rootScope.profile = "profile"

		ApiService.getAllProfiles()
			.then(profiles => $scope.profiles = profiles)

		// $scope.removePizza = function(id) {
		// 	ApiService.removePizza(id)
		// 		.then(console.log)
		// }
	})