angular.module('ccApp')
    .controller('RegisterController', function($scope, $rootScope, AuthService, toastr, $location) {

        $rootScope.section = 'register'

        $scope.register = function(event) {
            event.preventDefault()
            const { username, password } = $scope

            AuthService.register(username, password)
                .then(msg => {
                    console.log(msg)
                    toastr.success('Has creado tu cuenta correctamente', '¡Enhorabuena!')
                    $location.path('/')

                })
                .catch(() => {
                    toastr.error('La cuenta ya exite', 'Error')
                })
        }
    })