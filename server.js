'use_strict';

var express = require('express');
var httpProxy = require('http-proxy');

var apiForwardingUrl = 'http://YOUR_ADDRESS_HERE';

var server = express();
server.set('port', 3000);
server.use(express.static(__dirname + '/app'));

var apiProxy = httpProxy.createProxyServer();

server.all('/giantbomb/*', function (req, res) {
	apiProxy.web(req, res, {target: apiForwardingUrl});
	console.log('request made to giant bomb');
});

server.listen(server.get('port'), function () {
    console.log('Express server listening on port ' + server.get('port'));
});