'use-strict';

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/*+json' }));

var port = process.env.PORT || 8080;

var router = express.Router();

function writeToJson (data, fileName) {
	var output = {};
	try {
		fs.writeFileSync('test.json', JSON.stringify({data: 'someData'}, null, 4), 'utf-8');		
	} catch (err) {
		output = {error: true, message: err};
	} finally {
		if (!output.error) output = {error: false, message: 'success'};
		return output;
	}
}

// router.use(function(req, res, next) {
//     console.log('Hit the router');
//     req.headers['content-type'] = 'application/json';
//     next(); // make sure we go to the next routes and don't stop here
// });

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	// return writeToJson(req.data, req.fileName);
    res.json({ message: 'API is running!' });   
});

router.route('/writeLibrary').post(function (req, res) {
		// console.log('req', req);
		console.log('req.body', req.body);
		console.log('req.body.newObj', req.body.newObj);
		console.log('req.body.fileName', req.body.fileName);
		return writeToJson(req.body.data, req.body.fileName);
	});

// app.post('/writeJson', function(req, res) {
// 	console.log('req', req.body);
// 	return writeToJson(req.data, req.fileName);
//     // res.json({ message: 'hooray! welcome to our api!' });   
// });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);