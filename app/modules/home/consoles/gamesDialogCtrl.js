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

	GamesDialog.$inject = ['HelpersService', 'game'];

	function GamesDialog (HelpersService, game) {
		var gd = this,
			dateFormats = HelpersService.dateFormats();

		gd.gameInfo = game;
		gd.releaseDate = moment(game.original_release_date).format(dateFormats.abbrMonth);

		gd.gameInfo.genres.forEach(function (item, index) {
			console.log('item', item);
			var cleanedName = item.name.replace(/['"]+/g, '');
			if (index === 0 && item.name) {
				gd.concattedGenres = cleanedName;
			} else if (item.name) {
				gd.concattedGenres += ', ' + cleanedName;
			}
		});
		console.log('from dialog controller', game);
	}
})();