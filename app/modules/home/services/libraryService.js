(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:LibraryService
	* @description service to handle file writes in api server
	* # LibraryService
	* Library writing logic
	*/

	angular
		.module('home-control')
		.factory('LibraryService', Library);

	Library.$inject = ['$q', '$http'];

	function Library ($q, $http) {

		function getIt (where, what) {
			var def = $q.defer(),
				opts = {
					method: 'GET',
					url: 'http://localhost:8080/api/' + where
				};
			if (what) opts.url += '/' + what;
			
			$http(opts).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
			return def.promise;
		}

		function putIt (where, what) {
			var def = $q.defer(); // gonna have to combine the user form input with the gb call result to match the db model

			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/' + where,
				data: what
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
			return def.promise;
		}

		function addGameToLibrary (userGame, gbGame) {
			var def = $q.defer(),
				game; // gonna have to combine the user form input with the gb call result to match the db model

			putIt('addgame', game).then(function (result) {
				// something with success or failure
			});
		}

		function addConsoleToLibrary (userCon, gbCon) {
			var def = $q.defer(),
				con; // gonna have to combine the user form input with the gb call result to match the db model

			putIt('addconsole', con).then(function (result) {
				// something with success or failure
			});
		}

		function deleteGameFromLibrary (game) {
			putIt('deletegame', game).then(function (result) {
				// something with success or failure
			});
		}

		function deleteConsoleFromLibrary (con) {
			putIt('deleteconsole', con).then(function (result) {
				// something with success or failure
			});
		}

		function editGameInLibrary (game) {
			putIt('editgame', game).then(function (result) {
				// something with success or failure
			});
		}

		function editConsoleInLibrary (con) {
			putIt('editconsole', con).then(function (result) {
				// something with success or failure
			});
		}

		function getAllGamesInLibrary () {
			getIt('getgames').then(function (result) {
				// something with success or failure
			});
		}

		function getGamesForConsole (con) {
			getIt('getconsolegames', con).then(function (result) {
				// something with success or failure
			});
		}

		function getGameInfo (game) {
			getIt('getgameinfo', game).then(function (result) {
				// something with success or failure
			});
		}

		function getAllConsoles () {
			getIt('getconsoles').then(function (result) {
				// something with success or failure
			});
		}

		function getConsoleInfo (con) {
			getIt('getconsoleinfo', con).then(function (result) {
				// something with success or failure
			});
		}

		function writeToLibrary (data, fileName) {
			var def = $q.defer();
			fileName = 'app/assets/games/' + fileName + '.json';
			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/writeLibrary',
				data: {newObj: data, fileName: fileName}
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
			return def.promise;
		}

		return {
			writeToLibrary: writeToLibrary,
			addGame: addGameToLibrary,
			addConsole: addConsoleToLibrary,
			deleteGame: deleteGameFromLibrary,
			deleteConsole: deleteConsoleFromLibrary,
			editGame: editGameInLibrary,
			editConsole: editConsoleInLibrary,
			getAllGames: getAllGamesInLibrary,
			getGamesForConsole: getGamesForConsole,
			getGameInfo: getGameInfo,
			getAllConsoles: getAllConsoles,
			getConsoleInfo: getConsoleInfo
		};
	}
})();