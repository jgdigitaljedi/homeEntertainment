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
			var def = $q.defer();
			fileName = 'app/assets/games/' + fileName + '.json';
			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/writeLibrary',
				data: {newObj: data, fileName: fileName}
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
			return def.promise;
		}

		return {
			writeToLibrary: writeToLibrary
		};
	}
})();