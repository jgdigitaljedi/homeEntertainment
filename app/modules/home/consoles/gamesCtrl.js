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
		gc.noGameAvailable = false;

		function getGbDataForGames (games) {
			gc.showLoader = true;
			var gLen = games.length;
			gc.gamesCount = gLen;
			return $q.all(Array.apply(null, new Array(gLen)).map(function (item, index) {
				return new GiantbombService.lookupGame(games[index].gbId).then(function (result) {
					console.log('games result', result);
					if (!result.error) return result;
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

		gc.openAddDialog = function () {
			gc.addingGame = !gc.addingGame;
		};

		gc.addNewGame = function (game) {
			console.log('game to add', game);
			console.log('con to add to', gc.con);
			gc.consoleLibrary.push(game);
			LibraryService.writeToLibrary(gc.consoleLibrary, gc.con);
		};

		GiantbombService.getConsoleLibrary(gc.con).then(function (response) {
			gc.consoleLibrary = response;
			getGbDataForGames(response).then(function (games) {
				gc.showLoader = false;
				gc.games = games;
				if (games.length === 0) gc.noGameAvailable = true;
			});
		});
	}
})();