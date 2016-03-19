//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('allBlogsController', ['$scope','GetBlog', function($scope, GetBlog) {
$scope.getAllBlogs = function() {
    GetBlog.query().$promise.then(function(data) {
        $scope.blogs = data;
    }, console.error);
}
$scope.getAllBlogs();
   
}]);
function loadTodos() {
  $scope.items = todoFactory.query()  
}
controllers.controller('getNewBlogs', ['$scope', 'BlogEntry', function($scope, GetBlog) {
    $scope.newPost = function(){
        var blogDetail = {
            title: $scope.title,
            author: $scope.author,
            content: $scope.content 
        }
        console.log(blogDetail)
        GetBlog.save(blogDetail);
    }
}]);