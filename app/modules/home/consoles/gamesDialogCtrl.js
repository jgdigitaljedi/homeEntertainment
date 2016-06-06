(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:GamesDialogCtrl
	* @description
	* # GamesDialogCtrl
	* Controller of the games dialogs
	*/

	angular
		.module('home-control')
		.controller('GamesDialogCtrl', GamesDialog);

	GamesDialog.$inject = ['HelpersService', 'game', '$q'];


	function GamesDialog (HelpersService, game, $q) {
		
		function getRatingFromArray (arr) {
			var def = $q.defer();
			arr.map(function (item) {
				if (item.name.substring(0, 4) === 'ESRB') {
					def.resolve(item.name);
				}
			});
			return def.promise;
		}
		var gd = this,
			dateFormats = HelpersService.dateFormats(),
			ageData;

		if (game.original_game_rating) {
			getRatingFromArray(game.original_game_rating).then(function (rating) {
				ageData = HelpersService.solisAppropriate(rating);
				gd.ageClass = ageData.style;
				gd.solis = ageData.answer;
				gd.rating = rating;
			});			
		} else {
			HelpersService.solisAppropriate('ESRB: Z');
		}
		
		gd.gameInfo = game;
		gd.releaseDate = moment(game.original_release_date).format(dateFormats.abbrMonth);
		gd.concattedGenres = gd.gameInfo.genres ? gd.gameInfo.genres.map(function (item, index) {
			return item.name ? item.name : 'UNKNOWN';
		}).join(', ') : 'UNKNOWN';
		gd.concattedPublishers = gd.gameInfo.publishers ? gd.gameInfo.publishers.map(function (item, index) {
			return item.name ? item.name : 'UNKNOWN';
		}).join(', ') : 'UNKNOWN';
		gd.concattedPlatforms = gd.gameInfo.platforms ? gd.gameInfo.platforms.map(function (item, index) {
			return item.name ? item.name : 'UNKNOWN';
		}).join(', ') : 'UNKNOWN';
		gd.concattedSimilar = gd.gameInfo.similar_games ? gd.gameInfo.similar_games.map(function (item, index) {
			return item.name ? item.name : 'UNKOWN';
		}).join(', ') : 'UNKNOWN';
		gd.concattedThemes = gd.gameInfo.themes ? gd.gameInfo.themes.map(function (item, index) {
			return item.name ? item.name : 'UNKOWN';
		}).join(', ') : 'UNKNOWN';

		console.log('from dialog controller', game);
	}
})();