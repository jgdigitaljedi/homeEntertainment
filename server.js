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
		fs.writeFileSync('test.json', JSON.stringify(data, null, 4), 'utf-8');		
	} catch (err) {
		output = {error: true, message: err};
	} finally {
		if (!output.error) output = {error: false, message: 'success'};
		return output;
	}
}

function cleanUpJson (data, nested) {
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

    if (nested) {
    	var actualData = {};
	    for (var key in data) {
	    	actualData = JSON.parse(key);
	    }
	    return actualData;    	
    } else {
    	return data;
    }
}

router.use(function(req, res, next) {
    console.log('Hit the router');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'API is running!' });   
});

router.route('/writeLibrary').post(function (req, res) {
	var data = JSON.stringify(req.body),
		actualData;

	actualData = cleanUpJson(data, true);
	return writeToJson(actualData.newObj, actualData.fileName);
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);