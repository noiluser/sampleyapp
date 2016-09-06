app.controller("ExplorerController", function($scope, User) {
	"ngInject"
	$scope.isUserLoggedIn = false;
	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val){
		if (val) {
			$scope.isUserLoggedIn = true;
		} else {
			$scope.isUserLoggedIn = false;
		}
	});
});