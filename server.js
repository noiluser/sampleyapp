// require express and websockets
var server = require('http').createServer();
var express = require('express');
var bodyParser = require('body-parser');

var requester = require('./requester.js');

// creating instances
var app = express();

// set port
var port = process.env.PORT || 4081;

app.use( bodyParser.json() ); 
app.use( bodyParser.urlencoded( {extended: true} ) );

// Handling static content
app.use('/static', express.static(__dirname + '/public'));

// Show client window at the root
app.get("/", function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.get("/disk", function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.get("/disk/*", function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

//
app.post('/request', requester.request);
app.post('/login', requester.login);
app.get('/clientid', requester.clientid);

server.on('request', app);
server.listen(port, function () { 
	console.log('Listening on ' + server.address().port); 
});