app.factory('User', function($http, $q, $cookies) {
	var userPublic = new Object();
	var userPrivate = new Object(); 

	// Public
	userPublic.checkCookiesToken = function() {
		var token = $cookies.get("YaDiskAccess");
		userPrivate.token = token;
		return userPrivate.getUserData();
	}; 
	
	userPublic.setCode = function(code) {
		return userPrivate.getTokenByCode(code);
	}; 
	
	userPublic.resetParams = function() {
		var deferred = $q.defer();
		userPrivate.isAuthorized = false;
		userPrivate.name = "";
		userPrivate.hasPhoto = false;
		userPrivate.photo = "";
		deferred.resolve({isLoggedOut : true});
		return deferred.promise;
	};
	
	userPublic.getContent = function(path) {
		return userPrivate.request(path);
	};
	
	userPublic.isAuthorized = function() {
		return userPrivate.isAuthorized;
	};
	
	userPublic.getName = function() {
		return userPrivate.name;		
	};
	
	userPublic.hasPhoto = function() {
		return userPrivate.hasPhoto;		
	};
	
	userPublic.getPhoto = function() {
		return userPrivate.photo;		
	};
	
	// private
	userPrivate.getTokenByCode = function(code) {
		var params = {
				host : "oauth.yandex.ru",
				path : "/token",
				method : "POST",
				params : {
					code : code,
					}	
				};
		var deferred = $q.defer();
		return $http.post("/login", params).then(function(data) {
			//data.data.expires_in
			if (!data.data.access_token) {
				deferred.reject(data);
				return deferred.promise;
			} else 
				userPrivate.token = data.data.access_token;
				$cookies.put("YaDiskAccess", userPrivate.token);
				return userPrivate.getUserData();
			}, function(data) {
				deferred.reject(data);
				return deferred.promise;
			});	
	};
	
	userPrivate.getUserData = function() {
		var params = {
				host : "login.yandex.ru",
				path : "/info",
				method : "POST",
				headers : {'Authorization' : "OAuth " + userPrivate.token}
				//params : {}	
		}
		return $http.post("/request", params).then(function(data) {
			userPrivate.name = data.data.display_name;
			userPrivate.hasPhoto = true;
			userPrivate.photo = data.data.default_avatar_id;
			userPrivate.isAuthorized = true; 
		});
	};
	
	userPrivate.request = function(path) {
		if (!path) path = "";
		var params = {
				host : "cloud-api.yandex.net",
				path : "/v1/disk/resources?path=disk:/",
				method : "GET",
				navigate : path,
				headers : {'Authorization' : "OAuth " + userPrivate.token}
				//params : {}	
		}
		var deferred = $q.defer();
		$http.post("/navigate", params).then(function(data) {
			if (data.data.hasOwnProperty('error')) {
				deferred.reject(data.data);		
			} else {
				deferred.resolve(data.data);
			}
		}, function(data) {
			deferred.reject(data);
		});
		return deferred.promise;
	};
	
	userPublic.resetParams();
	return userPublic;
});