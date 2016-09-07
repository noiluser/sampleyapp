app.controller("ExplorerController", function($scope, $routeParams, $location, User) {
	"ngInject"

	$scope.items = [];
	
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
			if (content.hasOwnProperty('_embedded'))
				$scope.items = content._embedded.items;
		});
	});
	

	$scope.navigate = function(path) {
		var url = "/disk/" + path;
		$location.path( url );
	}
});