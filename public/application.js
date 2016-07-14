var mainApplicationModuleName = 'Loyalty1Challenge';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'challenge']);

mainApplicationModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

angular.element(document).ready(function() {
   angular.bootstrap(document, [mainApplicationModuleName]); 
});