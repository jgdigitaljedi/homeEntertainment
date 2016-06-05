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

	Games.$inject = ['$stateParams', 'GiantbombService', 'HelpersService', '$q'];

	function Games($stateParams, GiantbombService, HelpersService, $q) {
		var gc = this;

		gc.con = $stateParams.console;

		function getGbDataForGames (games) {
			var gLen = games.length;
			Array.apply(null, new Array(gLen)).map(function (item, index) {
				return new GiantbombService.lookupGame(games[index].gbId).then(function (result) {
					console.log('result', result);
				});
			});
		}

		// (function () {
			GiantbombService.getConsoleLibrary(gc.con).then(function (response) {
				console.log('games', response);
				getGbDataForGames(response);
			});
		// })();
	}
})();