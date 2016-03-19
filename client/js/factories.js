//The action to call the local API should be here

var factories = angular.module('myBlogApp');

factories.factory('PostFactory', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/posts/:id');
    
}]);

