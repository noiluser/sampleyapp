
var app = angular.module("yaSample", ['ngRoute', 'ngCookies', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
	    .when('/', {
	        templateUrl : 'static/tmpl/explorer.html',
	        controller  : 'ExplorerController'
	    })
    $locationProvider.html5Mode(true);
});