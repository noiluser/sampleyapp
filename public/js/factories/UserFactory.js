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
		$http.post("/login", params).then(function(data) {
			if (data.data.isAuthorized) {
				console.log("authorized OK");
				userPrivate.isAuthorized = true;
				userPrivate.getUserData().then(function(data){
					// getUserData success
					deferred.resolve(data);
				}, function(data){
					// getUserData error
					deferred.reject(data);
				});
			} else {
				console.log("not authorized");
			}
		}, function(data) {
			// login post error
			deferred.reject(data);
		});
		return deferred.promise;
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
		var deferred = $q.defer();
		$http.post("/request", params).then(function(data) {
			userPrivate.name = data.data.display_name;
			userPrivate.hasPhoto = true;
			userPrivate.photo = data.data.default_avatar_id;
			deferred.resolve(data.data);
		}, function(data) {
			deferred.reject(data);
		});
		return deferred.promise;
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