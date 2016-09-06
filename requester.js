var config = require('./config/conf');

var requester = {
		request : function(request, response) {
			getResponse(request.body, request.body.params, function(status, data) {
				response.json(data);
				return;
			});
		},
		
		login : function(request, response) {
			request.body.params.grant_type = "authorization_code";
			request.body.params.client_id = config.get('client_id');
			request.body.params.client_secret = config.get('client_secret');
			getResponse(request.body, request.body.params, function(status, data) {
				response.json(data);
				return;
			});
		},		
		
		clientid : function(request, response) {
			var data = {
					client_id : config.get('client_id')
			};
			response.json(data);
			return;
		}
}

var https = require("https");
var querystring = require("querystring");
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
    	console.log("ERROR", err);
    });

    req.write(querystring.stringify(data));
    req.end();
};

module.exports = requester;