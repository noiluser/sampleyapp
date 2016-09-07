app.factory('User', function($http) {
	var userPublic = new Object();
	var userPrivate = new Object(); 

	// Public
	userPublic.setCode = function(code, cb) {
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
				userPrivate.getUserData(cb);
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
	userPrivate.getUserData = function(cb) {
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
			//console.log(data.data);
		})
	};
	
	userPrivate.request = function(path, callback) {
		var params = {
				host : "cloud-api.yandex.net",
				path : "/v1/disk/resources?path=disk:" + path,
				method : "GET",
				//params : {}	
		}
		$http.post("/request", params).then(function(data) {
			console.log(data.data);
		})
	};
	
	
	userPublic.resetParams();
	return userPublic;
});