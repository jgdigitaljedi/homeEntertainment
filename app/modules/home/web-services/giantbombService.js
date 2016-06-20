(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:giantbombService
	* @description Giant Bomb API
	* # giantbombService
	* Service for simplifying calls to Giant Bomb API
	*/

	angular
		.module('home-control')
		.factory('GiantbombService', Giantbomb);

	Giantbomb.$inject = ['$http', '$q'];

	function Giantbomb ($http, $q) {

		function makeGbCall (params, res) {
			var def = $q.defer();
			var baseUrl = 'http://localhost:8080/api/giantbomb/' + params.resource + '/' + params.resourceId;
			$http({
				method: 'GET',
				url: baseUrl,
			}).success(function (response) {
				def.resolve(response.results);
			}).error(function (err) {
				def.resolve({error: true, message: err});
			});
			return def.promise;
		}

		function lookupConsole (which) {
			var def = $q.defer();
			var params = {
				resource: 'platform',
				resourceId: which,
			};
			return $q(function (resolve, reject) {
				makeGbCall(params).then(function (response) {
					resolve(response);
				});
			});
		}

		function lookupGame (which) {
			var params = {
				resource: 'game',
				resourceId: which,
			};
			return $q(function (resolve, reject) {
				makeGbCall(params).then(function (response) {
					resolve(response);
				});
			});
		}

		function getConsoleLibrary (con) {
			var def = $q.defer(),
				libPath = 'app/assets/games/' + con + '.json';
			$http.get(libPath)
				.success(function (res) {
					def.resolve(res.games);
				});
			return def.promise;
		}

		return {
			lookupConsole: lookupConsole,
			lookupGame: lookupGame,
			getConsoleLibrary: getConsoleLibrary
		};
	}
})();