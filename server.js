'use-strict';

var express    = require('express');
var app        = express(); /* jshint ignore:line*/
var fs = require('fs');
var sh = require('shelljs');
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

app.get('/api/serverInfo/:parm', function (req, res) {
	console.log('request', req.params.parm);
	var serverInfo = {main: 0};
	var nodeVersion = sh.exec('node --version', function (code, stdout, stderr) { return stdout; });
	nodeVersion.stdout.on('data', function (data) { res.json(data); });
	console.log('node version', serverInfo.nodeVersion);
	// serverInfo.npmVersion = sh.exec('npm --version', {silent:true}).output;
	// serverInfo.pythonVersion = sh.exec('python --version', {silent:true}).output;
	// serverInfo.gitVersion = sh.exec('git --version', {silent:true}).output;
	// serverInfo.uptime = sh.exec('uptime', {silent:true}).output;
	// serverInfo.osHd = sh.exec('df /sda1', {silent:true}).output;
	// serverInfo.mediaHd = sh.exec('df /sdb1', {silent:true}).output;
	// serverInfo.ram = sh.exec('free -m', {silent:true}).output;
	// serverInfo.distribution = sh.exec('lsb_release -a', {silent:true}).output;
	// serverInfo.kernel = sh.exec('uname -r', {silent:true}).output;
	// res.json(serverInfo);

});


app.listen(port);
console.log('Magic happens on port ' + port);