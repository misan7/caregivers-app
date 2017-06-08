angular.module('ccApp')
    .controller('EditProfileController', function ($scope, $rootScope, ApiService) {
  $rootScope.section = 'add-profile'

  $scope.editProfile = function (e) {
    e.preventDefault()
    $scope.availability = 'Jornada Parcial'
    const { name, location, description, experience, education, price, availability, phone, image: profileimage } = $scope

    ApiService.addProfile({ name, location, description, experience, education, price, availability, phone, profileimage })
        .then(console.log)
  }
})
