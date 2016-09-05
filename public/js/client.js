
var app = angular.module("yaSample", ['ngRoute', 'ngCookies', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
	    .when('/', {
	    	temlate : "<div>hello</div>"
	        //templateUrl : 'static/tmpl/notes.html',
	        //controller  : 'NotesController'
	    });
    $locationProvider.html5Mode(true);
});