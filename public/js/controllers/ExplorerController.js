app.controller("ExplorerController", function($scope) {
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