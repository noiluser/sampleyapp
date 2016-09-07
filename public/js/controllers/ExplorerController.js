app.controller("ExplorerController", function($scope, $routeParams, User) {
	"ngInject"
	$scope.isUserLoggedIn = false;
	$scope.path = "/" + $routeParams.path;
	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val){
		if (val) {
			$scope.isUserLoggedIn = true;
			$scope.$emit("loadFolder");
		} else {
			$scope.isUserLoggedIn = false;
		}
	});
	
	$scope.$on('loadFolder', function(event) {
		User.getContent($scope.path, function(content) {
			
		});
	});
});