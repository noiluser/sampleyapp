
var app = angular.module("yaSample", ['ngRoute', 'ngCookies', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
	    .when('/', {
	        templateUrl : 'static/tmpl/start.html',
	        controller  : 'StartController'
	    })
	    .when('/disk', {
	        templateUrl : 'static/tmpl/explorer.html',
	        controller  : 'ExplorerController'
	    })
	    .when('/disk/:path*', {
	        templateUrl : 'static/tmpl/explorer.html',
	        controller  : 'ExplorerController'
	    })
    $locationProvider.html5Mode(true);
});

// TODO:
// 1. navigation path issues
// 2. text overlps