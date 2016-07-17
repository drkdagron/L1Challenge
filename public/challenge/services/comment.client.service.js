angular.module('challenge').factory('Comment', ['$resource', function($resource) {
    console.log("Comment service being called");
    return $resource('/comments/:id');
}]);