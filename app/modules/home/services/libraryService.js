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

		function writeToLibrary (data, fileName) {
			fileName = 'app/assets/games/' + fileName + '.json';
			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/writeLibrary',
				data: {newObj: data, fileName: fileName}
			}).success(function (data, status) {
				return data;
			}).error(function (data, status) {
				return data;
			});
		}

		return {
			writeToLibrary: writeToLibrary
		};
	}
})();