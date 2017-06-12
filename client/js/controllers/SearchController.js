angular.module('ccApp')

	.controller('SearchController', function($scope, $rootScope, $location, $routeParams, ApiService) {

		$scope.searchQuery = function() {
			let location = $scope.location
			$location.path('/search-results/' + location)
		}
	})