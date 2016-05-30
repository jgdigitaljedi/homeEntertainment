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

	function Console(InstructionsService, $stateParams) {
		/*jshint validthis: true */
		function fixConsoleName (con) {
			if (con === 'ps2' || con === 'ps3') return con.charAt(0).toUpperCase() + con.charAt(1).toUpperCase() + ' ' + con.charAt(2);
			if (con === 'wiiu') return 'Wii U';
			if (con === 'pc') return 'PC';
			var conSplit = con.split(' '); // here in case future additions need it
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
		cs.selectedIndex = 0;
		cs.insImage = cs.consoleInstructions[0].image || 'app/assets/images/placeholder.png';

		cs.showImage = function (index) {
			cs.selectedIndex = index;
			cs.insImage = cs.consoleInstructions[index].image ? cs.consoleInstructions[index].image : 'app/assets/images/placeholder.png';
		};
	}

})();