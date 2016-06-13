(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:ServerService
	* @description service to get server info
	* # ServerService
	* server info logic
	*/

	angular
		.module('home-control')
		.factory('ServerService', Server);

	Server.$inject = ['$q', '$http'];

	function Server ($q, $http) {

		function getServerInfo () {
			$http.get('http://localhost:8080/api/serverInfo/nodeVersion').then(function (response) {
				console.log('response', response);
			});
			// 	method: 'GET',
			// 	url: 'http://localhost:8080/api/serverInfo',
			// 	params: {test: 'tester'}
			// }).then(function successCallback (response) {
			// 	console.log('server success', response);
			// }, function errorCallback (response) {
			// 	console.log('server error', response);
			// });
		}

		return {
			getServerInfo: getServerInfo
		};
	}
})();