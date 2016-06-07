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
			data = {newObj: {gbId: '666', title: 'Just a tester'}, fileName: 'Hell no!'};
			// data = JSON.stringify(data);
			// data = $.param(data);
			fileName = 'test.json';
			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/writeLibrary',
				// headers: {'Content-Type': 'application/json'},
				data: data
			}).success(function (data, status) {
				console.log('data from success', data);
			}).error(function (data, success) {
				console.log('data from error', data);
				console.log('status from error', status);
			});

			// $http.post('http://localhost:8080/api/writeLibrary', data)
			// 	.success(function (data, status, headers, config) {
			// 		console.log('success data', data);
			// 	}).erro(function (data, status, headers, config) {
			// 		console.log('error data', data);
			// 	});
		}

		return {
			writeToLibrary: writeToLibrary
		};
	}
})();