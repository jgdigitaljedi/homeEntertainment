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
			// data = {newObj: {gbId: '666', title: 'Just a tester'}, fileName: 'test.json'}; // for testing server
			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/writeLibrary',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				// transformRequest: function(obj) {
			 //        var str = [];
			 //        for(var p in obj)
			 //        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			 //        return str.join("&");
			 //    },
				data: data
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