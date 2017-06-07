angular.module('ccApp')

	.controller('showSearchProfilesController', function($scope, $rootScope, ApiService) {
		$rootScope.section = "search-results"

		ApiService.getAllProfiles()
			.then(profiles => $scope.profiles = profiles)

		// $scope.removePizza = function(id) {
		// 	ApiService.removePizza(id)
		// 		.then(console.log)
		// }
	})
