(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:GamesCtrl
	* @description
	* # GamesCtrl
	* Controller of the games lists
	*/

	angular
		.module('home-control')
		.controller('GamesCtrl', Games);

	Games.$inject = ['$stateParams', 'GiantbombService', 'HelpersService', '$q', '$state', '$mdDialog', 'LibraryService'];

	function Games($stateParams, GiantbombService, HelpersService, $q, $state, $mdDialog, LibraryService) {
		var gc = this;

		gc.con = $stateParams.console;
		gc.consoleTitle = HelpersService.consoleTitle(gc.con);

		LibraryService.writeToLibrary();

		function getGbDataForGames (games) {
			gc.showLoader = true;
			var gLen = games.length;
			gc.gamesCount = gLen;
			return $q.all(Array.apply(null, new Array(gLen)).map(function (item, index) {
				return new GiantbombService.lookupGame(games[index].gbId).then(function (result) {
					return result;
				});
			}));
		}

		gc.backToConsole = function () {
			$state.go('home.console', {activity: 'play', console: gc.con});
		};

		gc.openGameModal = function (game, index) {
			gc.gameInfo = game;
			$mdDialog.show({
				templateUrl: 'app/modules/home/consoles/gamesDialog.html',
				controller: 'GamesDialogCtrl as gd',
				clickOutsideToClose: true,
				locals: {
					game: game
				}
			});
		};

		GiantbombService.getConsoleLibrary(gc.con).then(function (response) {
			getGbDataForGames(response).then(function (games) {
				gc.showLoader = false;
				gc.games = games;
			});
		});
	}
})();