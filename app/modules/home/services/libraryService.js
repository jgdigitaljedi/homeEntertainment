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

		function addGameToLibrary (userGame, gbGame) {
			var def = $q.defer(),
				game; // gonna have to combine the user form input with the gb call result to match the db model

			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/addgame',
				data: game
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function addConsoleToLibrary (userCon, gbCon) {
			var def = $q.defer(),
				con; // gonna have to combine the user form input with the gb call result to match the db model

			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/addconsole',
				data: con
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function deleteGameFromLibrary (game) {
			var def = $q.defer();

			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/deletegame',
				data: game
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function deleteConsoleFromLibrary (con) {
			var def = $q.defer();

			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/deleteconsole',
				data: con
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function editGameInLibrary (game) {
			var def = $q.defer();

			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/editgame',
				data: game
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function editConsoleInLibrary (con) {
			var def = $q.defer();

			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/editconsole',
				data: con
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function getAllGamesInLibrary () {
			var def = $q.defer();

			$http({
				method: 'GET',
				url: 'http://localhost:8080/api/getgames'
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function getGamesForConsole (con) {
			var def = $q.defer();

			$http({
				method: 'GET',
				url: 'http://localhost:8080/api/getconsolegames',
				data: con
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function getGameInfo (game) {
			var def = $q.defer();

			$http({
				method: 'GET',
				url: 'http://localhost:8080/api/getgameinfo',
				data: game
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function getAllConsoles () {
			var def = $q.defer();

			$http({
				method: 'GET',
				url: 'http://localhost:8080/api/getconsoles'
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
		}

		function getConsoleInfo (con) {
			var def = $q.defer();

			$http({
				method: 'GET',
				url: 'http://localhost:8080/api/getconsoleinfo',
				data: con
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
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