
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/write', function(req, res) {
	return writeToJson(req.data, req.fileName);
    // res.json({ message: 'hooray! welcome to our api!' });   
});

app.post('/writeJson', function(req, res) {
	return writeToJson(req.data, req.fileName);
    // res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);