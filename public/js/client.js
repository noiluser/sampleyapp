
var app = angular.module("yaSample", ['ngRoute', 'ngCookies', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
	    .when('/', {
	        /*templateUrl : 'static/tmpl/explorer.html',
	        controller  : 'ExplorerController'*/
	    	template : "<div class=\"container\"> 							\
							<div class=\"row\" ng-show=\"!isUserLoggedIn\"> \
								<div class=\"col-xs-12\">					\
									<div class=\"text-center\">				\
										Please log in first					\
									</div>									\
								</div>										\
							</div>											\
						</div>"
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