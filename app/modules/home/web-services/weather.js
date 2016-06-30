(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:weatherService
	* @description weather info from weatherunderground
	* # weatherService
	* Service for simplifying calls to weatherunderground
	*/

	angular
		.module('home-control')
		.factory('WeatherService', Weather);

	Weather.$inject = ['$http', '$q'];

	function Weather ($http, $q) {

	function getConditions (locale) {
		var def = $q.defer();
		$http.get('/conditions/' + locale)
		.success(function(data, status, headers, config) {
			if (data && !data.error && data.current_observation !== undefined) {
	        	def.resolve(data.current_observation);							
			} else {
				data.error = true;
				def.resolve(data);
			}
		}).error(function(data, status, headers, config) {
			def.resolve({error: true});
		});
		return def.promise;
	}

	function getForecast () {
		
	}

	return {
		getConditions: getConditions,
		getForecast: getForecast
	};



	}
})();