//Logic for page actions here. 

var controllers = angular.module('myBlogApp');

controllers.controller('GetBlog', ['$scope','$location','PostFactory', function($scope, $location, PostFactory) {
$scope.getAllBlogs = function() {
    PostFactory.query().$promise.then(function(data) {
        $scope.blogs = data;
    }, console.error);
}
$scope.getAllBlogs();
   
}]);

controllers.controller('getNewBlog', ['$scope','$location','PostFactory',function($scope, $location, PostFactory) {
    $scope.newPost = function(){
        console.log('hello');
        $scope.blogDetail = {
            title: $scope.title,
            author: $scope.author,
            content: $scope.content 
        };
        console.log($scope.blogDetail);
        PostFactory.save($scope.blogDetail);
    };
}]);