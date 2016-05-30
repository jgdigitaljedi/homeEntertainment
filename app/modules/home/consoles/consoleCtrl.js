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

	Console.$inject = ['InstructionsService', '$stateParams'];
	// Console.$inject = ['$stateParams'];

	function Console(InstructionsService, $stateParams) {
	// function Console($stateParams) {
		/*jshint validthis: true */
		function fixConsoleName (con) {
			var conSplit = con.split(' ');
			if (conSplit.length === 1) return con.charAt(0).toUpperCase() + con.slice(1);
			conSplit.forEach(function (item){
				item.charAt(0).toUpperCase() + item.slice(1);
			});
			return conSplit.join();
		}

		var cs = this,
			con = $stateParams.console;
		cs.console = fixConsoleName(con);
		cs.consoleParams = InstructionsService.getInstructionArray(con);
		cs.consoleInstructions = InstructionsService.getConsoleInstructions(cs.consoleParams.arr, cs.consoleParams.params);
	}

})();