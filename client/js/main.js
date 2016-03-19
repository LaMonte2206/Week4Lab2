//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ['myBlogApp.controllers', 'myBlog.factories', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/index.html',
        controller: 'controllers.js'
    })
}]);