var requester = {
		request : function(request, response) {
			console.log(request.body);
			/*
			* url :
			* method :
			* params :
			*/
			/*var options = {
				    host: 'somesite.com',
				    port: 443,
				    path: '/some/path',
				    method: 'GET',
				    headers: {
				        'Content-Type': 'application/json'
				    }
				};
			*/
			getResponse(request.body, request.body.params, function(status, data) {
				response.json(data);
				return;
			});
			
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
		},
		
		
}

var https = require("https");

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
var getResponse = function(options, data, onResult) {

    var req = https.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    	console.log(err);
    });
    
    req.write(JSON.stringify(data));
    req.end();
};

module.exports = requester;