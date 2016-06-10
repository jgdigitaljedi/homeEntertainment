'use-strict';

var express    = require('express');
var app        = express();
// var bodyParser = require('body-parser');
// var router = express.Router();
var fs = require('fs');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

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
		var data = JSON.parse(bodyString);
		fs.readFile('keys.json', function (err, data) {
			console.log(data.joey_auth);
			if (err) {
				res.send({error: true, message: err});
			} else {
				if (req.hash === data.joey_auth) {
					res.send({error: false, result: true});
				} else {
					res.send({error: false, result: false});
				}
			}
		});
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

// old ideas I might revist
// router.use(function(req, res, next) {
//     console.log('Hit the router');
//     next(); // make sure we go to the next routes and don't stop here
// });

// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'API is running!' });   
// });

// router.route('/writeLibrary').post(function (req, res) {
// 	var data = JSON.stringify(req.body),
// 		actualData;

// 	actualData = cleanUpJson(data);
// 	return writeToJson(actualData.newObj, actualData.fileName);
// });

// app.use('/api', router);