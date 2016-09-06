app.controller("AuthController", function($scope, $location, $window, $http, $cookies, User) {
	"ngInject"
	$scope.paramsToString = $scope.$parent.paramsToString;
	
	/*$scope.openProfile = function() {
		$window.open('https://vk.com/' + $scope.userHref, '_blank');
	};
	
	$scope.openTop = function() {
		$location.path( "/");
	}
	
	var path = $location.hash();
	var cook = "";//$cookies.get("VkNotebookAccess");

	if(path) {
		//$cookies.put("VkNotebookAccess", path);
		User.setToken(path, function() {
			$location.hash("");
		});
	} else if (cook) {		
		User.setToken(cook);
	}
	
	$scope.$watch(function(){ return User.getFirstName(); }, function(val){
		$scope.userName = val;
	});	
	$scope.$watch(function(){ return User.getLastName(); }, function(val){
		$scope.userLastName = val;
	});	
	$scope.$watch(function(){ return User.getHref(); }, function(val){
		$scope.userHref = val;
	});	
	$scope.$watch(function(){ return User.getPhoto(); }, function(val){
		$scope.photo = val;
	});	
	$scope.$watch(function(){ return User.hasPhoto(); }, function(val){
		$scope.hasPhoto = val; 
	});	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val){
		$scope.isUserLoggedIn = val;
	});		
	
	$scope.logout = function() {
		//$cookies.remove("VkNotebookAccess");
		User.resetParams(function() {
			$location.path( "/");
		});
	};*/

	/*var path = $location.hash();
	if(path) {
		User.setToken(path, function() {
			$location.hash("");
		});
	}*/
	var code = $location.search().code;
	if (code) {
		var params = {
				host : "oauth.yandex.ru",
				path : "/token",
				method : "POST",
				params : {
					grant_type : code,
					client_id : "f18cbb797ecb4c648e9575377b071f52",
					client_secret : "3ebcc764f18a41af86c2ebbf90dddb58"
				}	
		}
		$http.post("/request", params).then(function(data) {
			console.log(data);
		})
	}
	// ok
	$scope.login = function() {
		var getParams = {
				response_type : "code",
				client_id : "f18cbb797ecb4c648e9575377b071f52",
				device_id : "",
				device_name : "",
				login_hint : "",
				force_confirm : "yes",
				state : ""			
		};
		$window.open('https://oauth.yandex.ru/authorize?' + this.paramsToString(getParams), '_self');
	};

});