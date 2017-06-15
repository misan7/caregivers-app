angular.module('ccApp')
    .controller('LoginController', function($scope, $rootScope, ApiService, AuthService, toastr, $location) {

        $rootScope.section = "login"

        $scope.login = function(event) {
            event.preventDefault()
            const { username, password } = $scope

            AuthService.login(username, password)
                .then(msg => {
                    console.log(msg)
                    toastr.success('Has iniciado Sesión', 'Bienvenido')
                    $location.path('/')

                })
                .catch(() => {
                    toastr.error('Password o nombre de usuario incorrecto', 'Error')
                })
        }
    })
