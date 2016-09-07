app.factory('User', function($http) {
	var userPublic = new Object();
	var userPrivate = new Object(); 

	// Public
	userPublic.setCode = function(code, callback) {
		var params = {
		host : "oauth.yandex.ru",
		path : "/token",
		method : "POST",
		params : {
			code : code,
			}	
		};
		$http.post("/login", params).then(function(data) {
			if (data.data.isAuthorized) {
				console.log("authorized OK");
				userPrivate.isAuthorized = true;
				userPrivate.getUserData(callback);
			} else {
				console.log("not authorized");
			}
		})
	}; 
	
	userPublic.resetParams = function() {
		userPrivate.isAuthorized = false;
		userPrivate.name = "";
		userPrivate.hasPhoto = false;
		userPrivate.photo = "";
	};
	
	userPublic.getContent = function(path, callback) {
		userPrivate.request(path, callback);
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
	userPrivate.getUserData = function(callback) {
		var params = {
				host : "login.yandex.ru",
				path : "/info",
				method : "POST",
				//params : {}	
		}
		$http.post("/request", params).then(function(data) {
			userPrivate.name = data.data.display_name;
			userPrivate.hasPhoto = true;
			userPrivate.photo = data.data.default_avatar_id;
			if (callback) 
				callback();
		})
	};
	
	userPrivate.request = function(path, callback) {
		if (!path) path = "";
		var params = {
				host : "cloud-api.yandex.net",
				path : "/v1/disk/resources?path=disk:/",
				method : "GET",
				navigate : path,
				//params : {}	
		}
		$http.post("/navigate", params).then(function(data) {
			if (data.data.hasOwnProperty('error')) {
				// error
			} else {
				callback(data.data);
			}
		})
	};
	
	
	userPublic.resetParams();
	return userPublic;
});