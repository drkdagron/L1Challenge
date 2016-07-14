angular.module('challenge').controller('ChallengeController', ['$scope', '$routeParams', '$location' ,'Challenge',
    function($scope, $routeParams, $location, Challenge) {
        $scope.posts = [ 'post 1', 'post 2', 'post 3', 'post 4', 'post 5', 'post 6' ];
        
        $scope.create = function()
        {
            var msg = new Challenge({
                user: this.user,
                message: this.message
            });
            console.log("submit hit");
            console.log($scope.myform);
            console.log($scope.myform.user.$setPristine());
            console.log($scope.myform.message.$setPristine());
           /*
            msg.$save(function (response)
            {
                $location.path('/');

            }, function(error) {
                $scope.error = error.data.message;
            });
            */
        };

        $scope.find = function() {
            console.log("finding courses");
            $scope.courses = Challenge.query();
            console.log($scope.courses);
        };

        console.log("hello challenge module created");
}]);