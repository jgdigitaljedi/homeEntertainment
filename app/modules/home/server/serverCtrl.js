(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:ServerCtrl
	* @description
	* # ConsoleCtrl
	* Controller of the console views
	*/

	angular
		.module('home-control')
		.controller('ServerCtrl', Console);

	Console.$inject = ['ServerService'];

	function Console(ServerService) {

		ServerService.getServerInfo();
	}
})();