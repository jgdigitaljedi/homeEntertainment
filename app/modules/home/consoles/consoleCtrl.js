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

	Console.$inject = ['InstructionsService', '$stateParams', 'GiantbombService', 'HelpersService'];

	function Console(InstructionsService, $stateParams, GiantbombService, HelpersService) {
		/*jshint validthis: true */
		/*jshint curly: false */
		function fixConsoleName (con) {
			if (con === 'ps2' || con === 'ps3') return con.charAt(0).toUpperCase() + con.charAt(1).toUpperCase() + ' ' + con.charAt(2);
			if (con === 'wiiu') return 'Wii U';
			if (con === 'pc' || con === 'nes') return con.toUpperCase();
			var conSplit = con.split(' '); // here in case future additions need it
			if (conSplit.length === 1) return con.charAt(0).toUpperCase() + con.slice(1);
			conSplit.forEach(function (item){
				item.charAt(0).toUpperCase() + item.slice(1); /*jshint ignore: line */
			});
			return conSplit.join();
		}

		var cs = this,
			con = $stateParams.console;
		cs.console = fixConsoleName(con);
		cs.consoleParams = InstructionsService.getInstructionArray(con);
		cs.consoleInstructions = InstructionsService.getConsoleInstructions(cs.consoleParams.arr, cs.consoleParams.params);
		cs.selectedIndex = 0;
		cs.insImage = cs.consoleInstructions[0].image || ['app/assets/images/placeholder.png'];
		GiantbombService.lookupConsole(cs.consoleParams.params.gbId).then(function (response) {
			cs.consoleInfo = response;
			cs.consoleInfo.release_date = moment(cs.consoleInfo.release_date).format('MMM D, YYYY');
			cs.consoleInfo.install_base = HelpersService.commify(cs.consoleInfo.install_base);
			console.log('info', cs.consoleInfo);
		});

		cs.showImage = function (index) {
			cs.selectedIndex = index;
			cs.insImage = cs.consoleInstructions[index].image ? cs.consoleInstructions[index].image : ['app/assets/images/placeholder.png'];
			cs.multImages = cs.insImage.length > 1 ? true : false;
		};
	}

})();