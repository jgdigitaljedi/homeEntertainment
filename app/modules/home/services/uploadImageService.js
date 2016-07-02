(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:uploadImageService
	* @description handles the server requests for uploading images
	* # uploadImageService
	* image upload logic goes here
	*/

	angular
		.module('home-control')
		.factory('UploadImageService', UploadImage);

	UploadImage.$inject = ['$http'];

	function UploadImage ($http) {
		var paths = {
			logo: 'uploadconsolelogo',
			load: 'uploadloadgame',
			power: 'uploadpowerbutton'
		};

		function upload (fd, type) {
			return $http.post('http://localhost:8080/api/' + paths[type], fd, {
		        headers: {'Content-Type': undefined },
		        transformRequest: angular.identity
		    });
		}

		return {
			upload: upload
		};
	}
})();