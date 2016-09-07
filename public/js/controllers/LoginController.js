app.controller("AuthController", function($scope, $location, $window, $http, $cookies, User) {
	"ngInject"
	$scope.paramsToString = $scope.$parent.paramsToString;
	
	var code = $location.search().code;
	if (code) {
		User.setCode(code).then(function(data) {
			$location.search('code', null)
		});
	}
	
	$scope.openTop = function() {
		if ($scope.isUserLoggedIn)
			$location.path( "/disk/" );
		else 
			$location.path( "/");
	}
	
	$scope.openProfile = function() {
		$window.open('https://passport.yandex.ru/profile', '_blank');
	};
	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val){
		$scope.isUserLoggedIn = val;
	});	
	$scope.$watch(function(){ return User.getPhoto(); }, function(val){
		$scope.photo = "https://avatars.yandex.net/get-yapic/" + val + "/islands-middle";
	});
	$scope.$watch(function(){ return User.hasPhoto(); }, function(val){
		$scope.hasPhoto = val; 
	});	
	$scope.$watch(function(){ return User.getName(); }, function(val){
		$scope.userName = val;
	});	

	$scope.login = function() {
		$http.get("/clientid").then(function(data) {
			var getParams = {
					response_type : "code",
					client_id : data.data.client_id,
					device_id : "",
					device_name : "",
					login_hint : "",
					force_confirm : "yes",
					state : ""			
			};
			$window.open('https://oauth.yandex.ru/authorize?' + $scope.paramsToString(getParams), '_self');
		});

	};
	
	$scope.logout = function() {
		User.resetParams().then(function(data) {
			if (data.isLoggedOut)
				$location.path( "/");
		});
	};

});