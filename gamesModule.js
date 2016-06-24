// games api module
// 'use strict';
var mongoose = require('mongoose');
var Games = require('./schemas/games.js');

exports.addGame = function (game, res) {
	var newGame = Games(game);
	newGame.save(function (err) {
		if (err) {
			res.send({error: true, message: err});
		} else {
			res.send({error: false});
		}
	});
};

exports.deleteGame = function (game, res) {

};

exports.editGame = function (game, res) {

};

exports.getAllGames = function (res) {
	Games.find({}, function (err, games) {
		if (err) {
			res.send({error: true, message: err});
		} else {
			res.send(games);
		}
	});
};

exports.getConsoleGames = function (con, res) {

};

exports.getGameInfo = function (game, res) {

};