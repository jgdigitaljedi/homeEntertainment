'use-strict';

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/*+json' }));

var port = process.env.PORT || 8080;

var router = express.Router();

function writeToJson (data, fileName) {
	var output = {};
	try {
		// fs.writeFileSync('test.json', JSON.stringify({data: 'someData'}, null, 4), 'utf-8');		
		fs.writeFileSync('test.json', JSON.stringify(data, null, 4), 'utf-8');		
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

// app.post('/api/writeLibrary', function (req, res) {
// 		return writeToJson(req.body.data, req.body.fileName);
	
// });

router.route('/writeLibrary').post(function (req, res) {
		// console.log('req', req);
		var data = JSON.stringify(req.body),
			actualData = {};
		console.log('req.body', req.body);
		data =data.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
        data = data.replace(/[\u0000-\u0019]+/g,"");
        data = JSON.parse(data);
        for (var key in data) {
        	actualData = JSON.parse(key);
        }
		console.log('data', actualData);
		// console.log('req.body.fileName', req.body.fileName);
		return writeToJson(actualData.newObj, actualData.fileName);
	});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);