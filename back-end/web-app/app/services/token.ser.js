'use strict';
angular.module('SAPP').factory('AuthInterceptor', ['$rootScope','CONFIG_URL', '$q', function ($rootScope, CONFIG_URL, $q) {
        return{
            responseError: function (response) {
                $rootScope.$broadcast({401:CONFIG_URL.notAuthenticated}[response.status],response);
                return $q.reject(response);
            }
        };
    }]);
