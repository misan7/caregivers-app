angular.module('ccApp')
    .config(function config($httpProvider) {

        $httpProvider.interceptors.push('AuthInterceptor')
    })