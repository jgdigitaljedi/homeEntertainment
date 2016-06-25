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

	Library.$inject = ['$q', '$http', 'HelpersService'];

	function Library ($q, $http, HelpersService) {
		var dateFormats = HelpersService.dateFormats();

		function filterResults (data, prop) {
			return data[prop].map(function (item, index) {
				return item.name;
			});
		}

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

		function addGameToLibrary (userData, gbData) {
			var def = $q.defer();
			var platforms = gbData.platforms && gbData.platforms.length > 0 ? filterResults(gbData, 'platforms') : ['UNKNOWN'],
				publishers = gbData.publishers && gbData.publishers.length > 0 ? filterResults(gbData, 'publishers') : ['UNKNOWN'],
				similar = gbData.similar_games && gbData.similar_games.length > 0 ? filterResults(gbData, 'similar_games') : ['UNKNOWN'],
				gameGenres = gbData.genres && gbData.genres.length > 0 ? filterResults(gbData, 'genres') : ['UNKNOWN'],
				gameRating;

			if (gbData.original_game_rating && gbData.original_game_rating.length > 0) {
				gbData.original_game_rating.forEach(function (item, index) {
					if (item.name.substring(0, 4).toUpperCase() === 'ESRB') gameRating = item.name;
				});								
			} else {
				gameRating = 'UNKNOWN';
			}

			var gameData = {
				mySystem: userData.gameConsole,
				gbId: userData.gbId,
				deck: gbData.deck,
				genres: gameGenres,
				idShort: gbData.id,
				images: gbData.image,
				name: gbData.name,
				original_game_rating: gameRating,
				original_release_date: moment(gbData.original_release_date).format(dateFormats.abbrMonth),
				platforms: platforms,
				publishers: publishers,
				similar_games: similar,
				dateAdded: moment().format(dateFormats.abbrMonth),
				onHd: userData.onHd ? true : false,
				year: parseInt(moment(gbData.original_release_date).format(dateFormats.year)),
				case: userData.hasCase ? true : false,
				burned: userData.burnedCopy ? true : false
			};

			console.log('gameData', gameData);
			// putIt('addgame', gameData).then(function (result) { // I comment this out when Im still not quite ready to hit the DB
			// 	// something with success or failure
				// def.resolve(result);
			// });
			return def.promise;
		}

		function addConsoleToLibrary (userCon, gbCon) {
			var def = $q.defer();
			console.log('gbCon', gbCon);
			console.log('userCon', userCon);
			var conData = {
				deck: gbCon.deck,
				idShort: gbCon.id,
				images: gbCon.image,
				install_base: HelpersService.commafy(parseInt(gbCon.install_base)),
				name: gbCon.name,
				company: gbCon.company.name,
				original_price: gbCon.original_price,
				release_date: gbCon.release_date,
				dateAdded: moment().format(dateFormats.abbrMonth),
				hasHd: userCon.hasHd ? true : false,
				portNumber: userCon.portNumber,
				gbId: userCon.gbId,
				notes: userCon.conNotes,
				controllers: userCon.controllers,
				accessories: userCon.accessories,
				mods: userCon.mods,
				avOutMethod: userCon.avOut,
				memoryCards: userCon.memoryCards,
				year: parseInt(moment(gbCon.release_date).format(dateFormats.year))
			};
			console.log('console data', conData);
			// putIt('addconsole', conData).then(function (result) {
				// something with success or failure
			// });
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