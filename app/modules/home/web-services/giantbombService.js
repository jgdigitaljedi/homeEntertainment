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
		(function () {
			$http.get('keys.json')
				.then(function (res) {
					apiKey = res.giantbomb_api_key;
				});
		})();

		function makeGbCall (params) {
			var def = $q.defer(),
				// baseUrl = 'http://www.giantbomb.com/api/' + params.resource + '/' + params.resourceId + '/?api_key=' + apiKey + '&format=json';
				baseUrl = 'http://www.giantbomb.com/api/' + params.resource + '/' + params.resourceId + '/?api_key=' + apiKey;
			$http({
				method: 'GET',
				url: baseUrl,
				dataType: 'jsonp'
			}).then(function (response) {
				def.resolve(response);
			});
			return def.promise;
		}

		function lookupConsole (which) {
			var params = {
				resource: 'platform',
				resourceId: which,
			};
			return makeGbCall(params);
		}

		function lookupGame (which) {
			var params = {
				resource: 'game',
				resourceId: which,
			};
			return makeGbCall(params);
		}

		return {
			lookupConsole: lookupConsole,
			lookupGame: lookupGame
		};
	}
})();