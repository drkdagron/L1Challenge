angular.module('challenge').factory('Challenge', ['$resource', function($resource) {
    console.log("Challenge service being called");
    return $resource('/posts/:userposts');
}]);