app.controller("ExplorerController", function($scope, $routeParams, User) {
	"ngInject"
	$scope.isUserLoggedIn = false;
	$scope.items = [];
	
	if ($routeParams.path) {
		$scope.path = $routeParams.path;
		$scope.paths = $routeParams.path.split('/');
	} else 
		$scope.path = "";
	
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
			if (content.hasOwnProperty('_embedded'))
				$scope.items = content._embedded.items;
		});
	});
	
	$scope.navigateByIndex = function(index) {
		if (index < $scope.paths.length) {
			var navigator = "";
			for(var i = 0; i < index; i++) {
				navigator += "/" + $scope.paths[index];
			};
			$location.path( "/disk" + navigator);
		} else {
			console.log("error: index=" + index + " is out of bounds (path length is " + $scope.paths.length + ")");
		}
	};
});