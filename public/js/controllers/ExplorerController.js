app.controller("ExplorerController", function($scope, $routeParams, User) {
	"ngInject"
	$scope.isUserLoggedIn = false;
	$scope.path = $routeParams.path;
	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val){
		if (val) {
			$scope.isUserLoggedIn = true;
		} else {
			$scope.isUserLoggedIn = false;
		}
	});
});