app.controller("ExplorerController", function($scope, $routeParams, $location, User) {
	"ngInject"

	$scope.items = [];
	$scope.isContentLoaded = false;
	
	if ($routeParams.path)
		$scope.path = $routeParams.path;
	else 
		$scope.path = "";
	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val, oldValue){
	    if(val && !angular.equals(val, oldValue)){
	    	$scope.$emit("loadFolder");
	    }		
	});
	
	$scope.$on('loadFolder', function(event) {
		User.getContent($scope.path)
		.then(function(data) {
			console.log("s", data._embedded.items);
			$scope.isContentLoaded = true;
			if (data.hasOwnProperty('_embedded'))
				$scope.items = data._embedded.items;
			
		},	function(data) {
			console.log("e", data);
		});
	});
	

	$scope.navigate = function(path) {
		var url = "/disk/" + path;
		$location.path( url );
	}
});