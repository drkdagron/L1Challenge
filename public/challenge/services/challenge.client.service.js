angular.module('challenge').factory('Challenge', ['$resource', function($resource) {
    return $resource('/posts');
}]);