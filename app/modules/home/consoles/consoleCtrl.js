(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:ConsoleCtrl
	* @description
	* # ConsoleCtrl
	* Controller of the console views
	*/

	angular
		.module('home-control')
		.controller('ConsoleCtrl', Console);

	// Console.$inject = ['instructionsService', '$stateParams'];
	Console.$inject = ['$stateParams'];

	// function Console(instructionsService, $stateParams) {
	function Console($stateParams) {
		/*jshint validthis: true */
		var cs = this;
		cs.console = $stateParams.console;

	}

})();