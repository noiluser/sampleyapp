app.factory('User', function($http, $q) {
	var userPublic = new Object();
	var userPrivate = new Object(); 

	// Public
	userPublic.setCode = function(code) {
		var params = {
		host : "oauth.yandex.ru",
		path : "/token",
		method : "POST",
		params : {
			code : code,
			}	
		};
		var deferred = $q.defer();

		var deferred = $q.defer();
		return $http.post("/login", params).then(function(data) {
			if (!data.data.isAuthorized) {
				deferred.reject(data);
				return deferred.promise;
			} else 
				return userPrivate.getUserData();
			}, function(data) {
				deferred.reject(data);
				return deferred.promise;
			}).then(function(data) { 
				console.log("second then", data)
				userPrivate.isAuthorized = true; 
				});
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
		var deferred = $q.defer();
		userPrivate.request(path).then(
			function(data) {
				deferred.resolve(data);
			}, function(data) {
				deferred.reject(data);}
		);
		return deferred.promise;
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
	userPrivate.getUserData = function() {
		var params = {
				host : "login.yandex.ru",
				path : "/info",
				method : "POST",
				//params : {}	
		}
		return $http.post("/request", params).then(function(data) {
			console.log("fisrt then", data);
			userPrivate.name = data.data.display_name;
			userPrivate.hasPhoto = true;
			userPrivate.photo = data.data.default_avatar_id;
			return this;
		});
	};
	
	userPrivate.request = function(path) {
		if (!path) path = "";
		var params = {
				host : "cloud-api.yandex.net",
				path : "/v1/disk/resources?path=disk:/",
				method : "GET",
				navigate : path,
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