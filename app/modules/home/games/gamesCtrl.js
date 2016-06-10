(function () {
	'use strict';
	/*jshint -W065 */

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

	Games.$inject = ['$stateParams', 'GiantbombService', 'HelpersService', '$q', '$state', '$mdDialog', 'LibraryService', '$scope', '$timeout'];

	function Games($stateParams, GiantbombService, HelpersService, $q, $state, $mdDialog, LibraryService, $scope, $timeout) {
		var gc = this,
			onHd;

		gc.con = $stateParams.console;
		gc.consoleTitle = HelpersService.consoleTitle(gc.con);
		gc.noGameAvailable = false;
		gc.hdGames = [];
		gc.showNoJoe = {show: false, message: ''};

		function getGbDataForGames (games) {
			gc.showLoader = true;
			var gLen = games.length;
			gc.gamesCount = gLen;
			return $q.all(Array.apply(null, new Array(gLen)).map(function (item, index) {
				return new GiantbombService.lookupGame(games[index].gbId).then(function (result) {
					if (!result.error) return result;
				});
			}));
		}

		gc.backToConsole = function () {
			$state.go('home.console', {activity: 'play', console: gc.con});
		};

		gc.openGameModal = function (game, index) {
			if (gc.hdGames.length > 0) {
				gc.games.forEach(function (item, index) {
					gc.hdGames.forEach(function (i, ind) {
						onHd = item.id === i ? true : false;
					});
				});				
			} else {
				gc.onHd = false;
			}

			gc.gameInfo = game;
			$mdDialog.show({
				templateUrl: 'app/modules/home/games/gamesDialog.html',
				controller: 'GamesDialogCtrl as gd',
				clickOutsideToClose: true,
				locals: {
					game: game,
					onHd: onHd
				}
			});
		};

		gc.openAddDialog = function () {
			gc.addingGame = !gc.addingGame;
		};

		function getConsoleGames () {
			GiantbombService.getConsoleLibrary(gc.con).then(function (response) {
				gc.consoleLibrary = response;

				gc.consoleLibrary.forEach(function (item, index) {
					if (item.onHd) {
						gc.hdGames.push(parseInt(item.gbId.split('-')[1]));
					}
				});
				getGbDataForGames(response).then(function (games) {
					if (games.length === 0) gc.noGameAvailable = true;
					gc.games = games;

					gc.showLoader = false;
				});
			});			
		}

		gc.openAuthDialog = function ($event) {
			$mdDialog.show({
				templateUrl: 'app/modules/home/games/joeyAuth.html',
				controller: 'JoeyAuthCtrl as ja',
				clickOutsideToClose: true,
				locals: {
					game: gc.newGame
				},
				targetEvent: $event
			}).then(function (result) {
				console.log('result from close', result);
				if (result.result) {
					gc.addNewGame(gc.newGame);
				} else {
					gc.showNoJoe.show = true;
					gc.showNoJoe.message = 'You\'re not Joey so you cannot edit the game library!!';
					$timeout(function () {
						gc.showNoJoe.message = '';
						gc.showNoJoe.show = false;
					}, 4000);
				}
			});
		};

		gc.addNewGame = function (game) {
			gc.consoleLibrary.push(game);
			gc.consoleLibrary.sort(HelpersService.compare('title'));
			LibraryService.writeToLibrary(gc.consoleLibrary, gc.con).then(function (result) {
				if (!result.error) {
					gc.games = [];
					gc.consoleLibrary = [];
					gc.openAddDialog();
					getConsoleGames();
				}
			});
		};

		(function () {
			getConsoleGames();
		})();
	}
})();