var requester = {
		request : function(request, response) {
			getResponse(request.body, request.body.params, function(status, data) {
				response.json(data);
				return;
			});
		}
}

var https = require("https");
var querystring = require('querystring');

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
        	console.log("pr", chunk);
            output += chunk;
        });

        res.on('end', function() {
        	console.log("ok", output);
            /*var obj = JSON.parse(output);
            onResult(res.statusCode, obj);*/
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    	console.log(err);
    });
    console.log(querystring.stringify(data));
    req.write(querystring.stringify(data));
    req.end();
};

module.exports = requester;