angular.module('challenge').controller('ChallengeController', ['$scope', '$window', '$routeParams', '$location', 'Challenge',
    function($scope, $window, $routeParams, $location, Challenge) {
        
        $scope.create = function()
        {
            var msg = new Challenge({
                user: this.user,
                message: this.message
            });

            msg.$save(function (response)
            {
                $location.path('/');
                $window.location.reload();
            }, function(error) {
                $scope.error = error.data.message;
            });
        };

        $scope.findcomments = function() {
            console.log("finding comments");
            $scope.comments = Comment.query();
        };

        $scope.find = function() {
            $scope.courses = Challenge.query();
            console.log($scope.courses);
            $scope.course = Challenge.query();
        };

        $scope.findByUser = function() {
            console.log($scope.courses.user);
            console.log($scope.selector);
            $scope.courses = Challenge.query({userposts: $scope.courses.user});
        };

        console.log("hello challenge module created");
}]);