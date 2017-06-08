angular.module('ccApp')

	.controller('ProfileController', function($scope, $rootScope, $routeParams, ApiService) {
		console.log("routeParams", $routeParams.id);

		// TODO Api Service Call: obtener profile por ID
		// TODO Asignar a $scope.profile el resultado
		const id = $routeParams.id
		ApiService.getProfileById(id)
			.then( response => { 

				$scope.profile = response.data
			})
	})