'use-strict';

var express    = require('express');
var app        = express(); /* jshint ignore:line*/
var fs = require('fs');
var port = process.env.PORT || 8080;


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


app.listen(port);
console.log('Magic happens on port ' + port);