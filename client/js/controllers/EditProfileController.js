angular.module('ccApp')

	.controller('EditProfileController', function($scope, $rootScope, ApiService) {

		$scope.editProfile = function(e) {
			e.preventDefault()
			$scope.availability = 'Jornada Parcial'
			const { name, location, description, experience, education, price, availability, phone, image: profileimage, topimage: topimage } = $scope

			ApiService.addProfile({ name, location, description, experience, education, price, availability, phone, profileimage, topimage })
				.then(console.log)
		}
	})
