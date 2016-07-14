angular.module('challenge').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'challenge/views/challenge.client.view.html'}).otherwise({redirectTo:'/'});
}]);