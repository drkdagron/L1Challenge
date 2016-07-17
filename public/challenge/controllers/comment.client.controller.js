angular.module('challenge').controller('CommentController', ['$scope', '$window', '$routeParams', '$location', 'Comment',
    function($scope, $window, $routeParams, $location, Comment) {
        
        $scope.createComment = function()
        {
            var msg = new Comment({
                commusername: this.commuser,
                commmessage: this.commmsg,
                commid: $routeParams.id
            });
            console.log(msg);

            msg.$save(function (response)
            {
                $window.location.reload();
                $location.path('/comments/' + $routeParams.id);
                
            }, function(error) {
                $scope.error = error.data.message;
            });
        };

        $scope.findComments = function() {
            $scope.comment = Comment.get({ id : $routeParams.id });
            console.log($scope.comment);
        }

        console.log("hello comment module created");
}]);