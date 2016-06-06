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
		var gd = this;
		gd.gameInfo = game;		
		console.log('from dialog controller', game);
	}
})();