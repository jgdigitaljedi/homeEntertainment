'use_strict';

// var express = require('express');
// var httpProxy = require('http-proxy');

// var apiForwardingUrl = 'http://www.giantbomb.com/api/';

// var server = express();
// server.set('port', 9000);
// server.use(express.static(__dirname + '/app'));

// var apiProxy = httpProxy.createProxyServer();

// server.all('/giantbomb', function (req, res) {
// 	console.log('proxy request', req);
// 	apiProxy.web(req, res, {target: apiForwardingUrl + req.resource + '/' + req.resourceId + '/?api_key=' + req.apiKey + '&format=json'});
// 	console.log('request made to giant bomb');
// });

// server.listen(server.get('port'), function () {
//     console.log('Express server listening on port ' + server.get('port'));
// });

var express = require('express');  
var request = require('request');

var app = express();  
app.use('/', function(req, res) {  
  var url = apiServerHost + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 9000);  