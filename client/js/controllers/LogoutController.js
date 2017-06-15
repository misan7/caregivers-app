angular.module('ccApp')
    .controller('LogoutController', function($scope, $location, AuthService, toastr) {

        AuthService.logout()
        toastr.success('Has salido de Calm and Care', 'Hasta Pronto')
        $location.path('/')
    })
