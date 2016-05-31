'use_strict';

var express = require('express');
var app = express(); /*jshint ignore:line*/

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  	res.redirect('/index.html'); /*jshint ignore:line*/
});

app.get('/giantbomb', function (req, res) {

});

app.listen(4000);