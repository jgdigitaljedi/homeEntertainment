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
		console.log('from dialog controller', game);
	}
})();