angular.module('ccApp')
    .controller('RegisterController', function($scope, $rootScope, AuthService) {

        $rootScope.section = 'register'

        $scope.register = function(event) {
            event.preventDefault()
            const { username, password } = $scope

            AuthService.register(username, password)
                .then(console.log)
                .catch(console.log)
        }
    })