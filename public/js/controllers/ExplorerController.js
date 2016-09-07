app.controller("ExplorerController", function($scope, $routeParams, $location, User) {
	"ngInject"

	$scope.items = [];
	$scope.isContentLoaded = false;
	
	if ($routeParams.path)
		$scope.path = $routeParams.path;
	else 
		$scope.path = "";
	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val){
		if (val)
			$scope.$emit("loadFolder");
	});
	
	$scope.$on('loadFolder', function(event) {
		User.getContent($scope.path, function(content) {
			$scope.isContentLoaded = true;
			if (content.hasOwnProperty('_embedded'))
				$scope.items = content._embedded.items;
		});
	});
	

	$scope.navigate = function(path) {
		var url = "/disk/" + path;
		$location.path( url );
	}
});