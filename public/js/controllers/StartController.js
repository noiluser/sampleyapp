app.controller("AuthController", function($scope, $location, $window, $http, $cookies, User) {
	"ngInject"
	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val){
		$scope.isUserLoggedIn = val;
	});	
	
});