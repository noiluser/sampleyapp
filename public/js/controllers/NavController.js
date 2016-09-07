app.controller("NavController", function($scope, $routeParams, $location, User) {
	"ngInject"
	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val){
		if (val) {
			$scope.isUserLoggedIn = true;
		} else {
			$scope.isUserLoggedIn = false;
		}
	});
	
	if ($routeParams.path) {
		$scope.path = $routeParams.path;
		$scope.paths = $routeParams.path.split('/');
	} else {
		$scope.path = "";
	}
	
	$scope.navigateByIndex = function(index) {
		if (index < $scope.paths.length) {
			var navigator = "";
			for(var i = 0; i <= index; i++) {
				navigator += "/" + $scope.paths[index];
			};
			$location.path( "/disk" + navigator);
		} else {
			console.log("error: index=" + index + " is out of bounds (path length is " + $scope.paths.length + ")");
		}
	};
});