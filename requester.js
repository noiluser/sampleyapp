var requester = {
		request : function(request, response) {
			response.json("{'response':'ok'}");
			return;
			/*
			var url = "https://login.yandex.ru/info?callback=JSON_CALLBACK&onload=JSON_CALLBACK&oauth_token=" + this.access_token;
			$http.jsonp(url).
			    success(function(data, status, headers, config) {
			    	console.log(data);
			    	self.firstName = data.response[0].first_name;
			    	self.lastName = data.response[0].last_name;
			    	self.href = data.response[0].domain;
			    	self.photo = data.response[0].photo_100;
			    	self.hasPhoto = data.response[0].has_photo;
			    	self.id = data.response[0].id;
			    	if (cb)
			    		cb();
			    }).
			    error(function(data, status, headers, config) {
			        console.log(data);
			    });*/
		}
}

module.exports = requester;