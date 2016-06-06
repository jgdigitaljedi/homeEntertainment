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

	// not running this through express proxy simply because planning to host this on my media server for private use at home
	function Giantbomb ($http, $q) {

		var apiKey;
		function getApiKey () {
			var def = $q.defer();
			$http.get('keys.json')
				.success(function (res) {
					def.resolve(res.giantbomb_api_key);
				});
			return def.promise;
		}

		function makeGbCall (params, res) {
			var def = $q.defer();
			var baseUrl = 'http://www.giantbomb.com/api/' + params.resource + '/' + params.resourceId + 
				'/?api_key=' + res + '&format=json';
			$http({
				method: 'GET',
				url: baseUrl,
			}).then(function (response) {
				def.resolve(response.data.results);
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
				getApiKey().then(function (res) { 
					makeGbCall(params, res).then(function (response) {
						resolve(response);
					});
				});
			});
		}

		function lookupGame (which) {
			var params = {
				resource: 'game',
				resourceId: which,
			};
			return $q(function (resolve, reject) {
				getApiKey().then(function (res) { 
					makeGbCall(params, res).then(function (response) {
						resolve(response);
					});
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