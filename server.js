'use-strict';

//dependecies
var express    = require('express');
var app        = express(); /* jshint ignore:line*/
var fs = require('fs');
var sh = require('shelljs');
var port = process.env.PORT || 8080;
var http = require('http');

//db
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ghcc');
var db = mongoose.connection;
db.on('error', console.error);

//models
var Keys = require('./schemas/keys.js');
var Games = require('./schemas/games.js');
var Consoles = require('./schemas/consoles.js');

//how to manually add keys if ever necessary
// var gbKey = Keys({
// 	key: 'key contents here', value: 'key value here'
// });

// gbKey.save(function (err) {
// 	if (err) throw err;
// });

// Keys.find({}, function (err, keys) {
// 	if (err) throw err;
// 	console.log('keys', keys);
// });

//private functions
function writeToJson (data, fileName) {
	var output = {};
	try {	
		fs.writeFileSync(fileName, JSON.stringify(data, null, 4), 'utf-8');		
	} catch (err) {
		output = {error: true, message: err};
	} finally {
		if (!output.error) output = {error: false, message: 'success'};
		return output;
	}
}

function proxy (url, res, req, callback) {
    http.get(url).on('response', function (response) {
        var body = '';
        var i = 0;
        response.on('data', function (chunk) {
            i++;
            body += chunk;
        });
        response.on('end', function () {
            if(callback && typeof(callback) === 'function') {
                callback(req, res, body);
            } else {
                body = JSON.parse(body);
                if(body) res.json(body);
                else res.json({});
            }
        });
    });
}

//consoles
app.get('/getConsoles', function (req, res) {
	Consoles.find({}, function (err, consoles) {
		res.send(consoles);
	});
});

app.get('/getSpecificConsole', function (req, res) {

});

app.put('/addConsole', function (req, res) {
	var bodyString = '';

	req.on('data', function (chunk) {
		bodyString += chunk.toString();
	});

	req.on('end', function () {
		var con = JSON.parse(bodyString);
	});
});

//auth
app.post('/api/auth', function (req, res) {
	var bodyString = '';

	req.on('data', function (chunk) {
		bodyString += chunk.toString();
	});

	req.on('end', function () {
		var keyStore = JSON.parse(fs.readFileSync('keys.json', 'utf-8'));
		var response = JSON.parse(bodyString);
		if (keyStore.joey_auth === response.hash) {
			res.send({error: false, result: true});				
		} else {
			res.send({error: true, result: false});
			
		}
	});
});

//json writes that will eventually go away
app.post('/api/writeLibrary', function (req, res) {
	var bodyString = '';

	req.on('data', function (chunk) {
		bodyString += chunk.toString();
	});

	req.on('end', function () {
		var data = JSON.parse(bodyString);
		var newLib = {games: data.newObj};
		console.log('fileName', data.fileName);
		res.send(writeToJson(newLib , data.fileName));
		console.log('req', bodyString);
	});
});

app.get('/api/giantbomb/:platform/:id', function (req, res) {
	Keys.find({key: 'giantbomb_api_key'}, function (err, key) {
		if (!Array.isArray(key)) key = [key];
		var auth = key[0].value;
		proxy('http://www.giantbomb.com/api/' + req.params.platform + '/' + req.params.id + '/?api_key=' + auth + '&format=json', res);
	});
});

//server info
app.get('/api/serverInfo/:parm', function (req, res) {
	var cmd;

	if (req.params.parm.substring(0, 3) === '---') {
		cmd = req.params.parm.split('---').join('/');
	} else {
		cmd = req.params.parm;
	}
	console.log(cmd);

	var command = sh.exec(cmd, {silent: true, async: true});
	command.stdout.on('data', function (data) {
		res.send(data);
	});

});


app.listen(port);
console.log('Magic happens on port ' + port);