'use-strict';
/* jshint -W079 */

//dependecies
var express    = require('express');
var app        = express();
var fs = require('fs');
var sh = require('shelljs');
var port = process.env.PORT || 8080;
var http = require('http');
var gameApi = require('./gamesModule.js');
var consoleApi = require('./consolesModule.js');
var multer = require('multer');
var Weather = require('./weather.js');
// var uploadConsoleLogo = multer({ dest: 'app/assets/images/' });

var consoleLogoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './app/assets/images/consoles/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var consolePowerButtonStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './app/assets/images/power/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var consoleLoadGameStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './app/assets/images/insertGame/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


var uploadConsoleLogo = multer({storage: consoleLogoStorage});
var uploadPowerButton = multer({storage: consolePowerButtonStorage});
var uploadLoadGame = multer({storage: consoleLoadGameStorage});

//db
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ghcc');
var db = mongoose.connection;
db.on('error', console.error);

//models
var Keys = require('./schemas/keys.js');
// var Games = require('./schemas/games.js');
// var Consoles = require('./schemas/consoles.js');

//how to manually add keys if ever necessary
// var gbKey = Keys({
// 	key: 'someKey', value: 'someValue'
// });

// gbKey.save(function (err) {
// 	if (err) throw err;
// });

// Keys.find({}, function (err, keys) {
// 	if (err) throw err;
// 	console.log('keys', keys);
// });

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
 });

/********************
private functions
********************/
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
            	console.log('body', body);
                body = JSON.parse(body);
                if(body) res.json(body);
                else res.json({});
            }
        });
    });
}

/********************
weather
********************/
app.route('/api/weather/conditions').get(Weather.conditions);

// app.route('/api/weather/forecast').get(Weather.forecast);

/********************
consoles
********************/
app.post('/api/addconsole', function (req, res) {
	var bodyString = '';

	req.on('data', function (chunk) {
		bodyString += chunk.toString();
	});

	req.on('end', function () {
		var con = JSON.parse(bodyString);
		consoleApi.addConsole(con, res);
	});
});

app.post('/api/deleteconsole', function (req, res) {
	var bodyString = '';

	req.on('data', function (chunk) {
		bodyString += chunk.toString();
	});

	req.on('end', function () {
		var con = JSON.parse(bodyString);
		consoleApi.deleteConsole(con, res);
	});
});

app.post('/api/editconsole', function (req, res) {
	var bodyString = '';

	req.on('data', function (chunk) {
		bodyString += chunk.toString();
	});

	req.on('end', function () {
		var con = JSON.parse(bodyString);
		consoleApi.editConsole(con, res);
	});
});

app.get('/api/getconsoles', function (req, res) {
	consoleApi.getAllGames(res);
});

app.get('/api/getconsoleinfo/:con', function (req, res) {
	consoleApi.getGameInfo(con, res);
});

/********************
games
********************/
app.post('/api/addgame', function (req, res) {
	var bodyString = '';

	req.on('data', function (chunk) {
		bodyString += chunk.toString();
	});

	req.on('end', function () {
		var game = JSON.parse(bodyString);
		gameApi.addGame(game, res);
	});
});

app.post('/api/deletegame', function (req, res) {
	var bodyString = '';

	req.on('data', function (chunk) {
		bodyString += chunk.toString();
	});

	req.on('end', function () {
		var game = JSON.parse(bodyString);
		gameApi.deleteGame(game, res);
	});
});

app.post('/api/editgame', function (req, res) {
	var bodyString = '';

	req.on('data', function (chunk) {
		bodyString += chunk.toString();
	});

	req.on('end', function () {
		var game = JSON.parse(bodyString);
		gameApi.editGame(game, res);
	});
});

app.get('/api/getgames', function (req, res) {
	gameApi.getAllGames(res);
});

app.get('/api/getconsolegames/:con', function (req, res) {
	gameApi.getconsoleGames(cons, res);
});

app.get('/api/getgameinfo/:game', function (req, res) {
	gameApi.getGameInfo(game, res);
});

/********************
auth
********************/
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

/********************
json writes that will eventually go away
********************/
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

/********************
file uploads
********************/
app.post('/api/uploadconsolelogo', uploadConsoleLogo.single('file'), function (req, res, next) {
	// req.file is the `photo` file 
	res.send({error: false});
	console.log('hit the api upload point');
	
});

app.post('/api/uploadloadgame', uploadLoadGame.single('file'), function (req, res, next) {
	// req.file is the `photo` file 
	res.send({error: false});
	console.log('hit the api upload point');
	
});

app.post('/api/uploadpowerbutton', uploadPowerButton.single('file'), function (req, res, next) {
	// req.file is the `photo` file 
	res.send({error: false});
	console.log('hit the api upload point');
	
});


/********************
proxies
********************/
app.get('/api/giantbomb/:platform/:id', function (req, res) {
	var options = {
		hostname: 'www.giantbomb.com',
		path: '/api/' + req.params.platform + '/' + req.params.id + '/?api_key=' + process.env.JGBKEY + '&format=json',
		method: 'GET',
		headers: {'user-agent': 'DigitalJedi'}
	};
	var req = http.request(options, function (response) {
	    var body = '';
	    var i = 0;
	    response.on('data', function (chunk) {
	        i++;
	        body += chunk;
	    });
	    response.on('end', function () {
        	console.log('body', body);
            body = JSON.parse(body);
            if(body) res.json(body);
            else res.json({});
	    });
	});

	req.on('error', function (e) {
		res.send({error: true, message: e});
	});
	req.end();
	// Keys.find({key: 'giantbomb_api_key'}, function (err, key) {
	// 	if (!Array.isArray(key)) key = [key];
	// 	var auth = key[0].value;
	// 	proxy('http://www.giantbomb.com/api/' + req.params.platform + '/' + req.params.id + '/?api_key=XXXXX&format=json', res);
	// });
});

/********************
server info
********************/
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