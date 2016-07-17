angular.module('challenge').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/comments/:id', {
                        templateUrl: 'challenge/views/comments.client.view.html'
                    })
                    .when('/', {
                        templateUrl: 'challenge/views/challenge.client.view.html'
                    })
                  
}]);