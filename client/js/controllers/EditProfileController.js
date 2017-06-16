angular.module('ccApp')
    .controller('EditProfileController', function($scope, $rootScope, ApiService, toastr) {

        $scope.editProfile = function(e) {
            e.preventDefault()
            $scope.availability = 'Jornada Parcial'
            const { name, location, description, experience, education, price, availability, phone, image: profileimage, topimage: topimage } = $scope

            ApiService.addProfile({ name, location, description, experience, education, price, availability, phone, profileimage, topimage })
                .then(msg => {
                    console.log(msg)
                    toastr.success('Perfil insertado correctamente', 'Actualización')
                })
                .catch(() => {
                    toastr.error('Rellena los campos con marcados con un *asterisco', 'Error')
                })
        }
    })
