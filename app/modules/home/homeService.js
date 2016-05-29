(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('home-control')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Volume buttons always adjust volume on surround sound system."},
			{"feature": "When I refer to the AV switch I'm talking about the 8 port switch on top of the game cubbies."},
			{"feature": "All instructions are for the Logitech Harmony universal remote."},
			{"feature": "Handle game cartridges with care."},
			{"feature": "Do not fingerprint discs of any sort."},
			{"feature": "Instructions assume basic knowledge of general electronics."},
			{"feature": "If you don't have any common sense then don't touch my stuff!"}		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();
