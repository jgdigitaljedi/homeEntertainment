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
			data = {'bgId': '666', 'title': 'Hell no!'};
			fileName = 'test.json';
			$http({
				method: 'POST',
				url: 'http://localhost:8080/writeJson',
				data: {
					data: data,
					fileName: fileName
				}
			}).success(function (data, status) {
				console.log('data from success', data);
			}).error(function (data, success) {
				console.log('data from error', data);
				console.log('status from error', status);
			});
		}

		return {
			writeToLibrary: writeToLibrary
		};
	}
})();