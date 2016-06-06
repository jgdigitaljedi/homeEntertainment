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

	Games.$inject = ['$stateParams', 'GiantbombService', 'HelpersService', '$q', '$state'];

	function Games($stateParams, GiantbombService, HelpersService, $q, $state) {
		var gc = this;

		gc.con = $stateParams.console;
		gc.consoleTitle = HelpersService.consoleTitle(gc.con);

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
			console.log('game for modal', game);
		};

		GiantbombService.getConsoleLibrary(gc.con).then(function (response) {
			console.log('games', response);
			getGbDataForGames(response).then(function (games) {
				console.log('games', games);
				gc.showLoader = false;
				gc.games = games;
			});
		});
	}
})();