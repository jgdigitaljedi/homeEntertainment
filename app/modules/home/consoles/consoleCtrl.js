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
		var dateFormats = HelpersService.dateFormats(),
			cs = this,
			con = $stateParams.console,
			activity = $stateParams.activity;

		function fixConsoleName (con) {
			if (con === 'ps2' || con === 'ps3') return con.charAt(0).toUpperCase() + con.charAt(1).toUpperCase() + ' ' + con.charAt(2);
			if (con === 'wiiu') return 'Wii U';
			if (con === 'pc' || con === 'nes') return con.toUpperCase();
			var conSplit = con.split(' '); // here in case future additions need it
			if (conSplit.length === 1) return con.charAt(0).toUpperCase() + con.slice(1);
			conSplit.forEach(function (item, index){
				consSplit[index] = item.charAt(0).toUpperCase() + item.slice(1);
			});
			return conSplit.join();
		}


		cs.console = fixConsoleName(con);
		cs.consoleParams = InstructionsService.getInstructionArray(con);
		cs.consoleInstructions = InstructionsService.getConsoleInstructions(cs.consoleParams.arr, cs.consoleParams.params, con);
		cs.selectedIndex = 0;
		cs.insImage = cs.consoleInstructions[0].image || ['app/assets/images/placeholder.png'];

		if (activity === 'play') {
			cs.activtyNotes = '';
			cs.showNotes = false;
			GiantbombService.lookupConsole(cs.consoleParams.params.gbId).then(function (response) {
				if (response.error) {
					cs.showDetails = false;
				} else {
					cs.showDetails = true;
					cs.consoleInfo = response;
					cs.consoleInfo.release_date = moment(cs.consoleInfo.release_date).format(dateFormats.abbrMonth);
					cs.consoleInfo.install_base = HelpersService.commify(cs.consoleInfo.install_base);				
				}
			});
		} else {
			cs.showDetails = false;
			cs.showNotes = true;

			cs.activtyNotes = cs.consoleParams.params.notes;
			console.log('notes', cs.consoleParams.params.notes);
		}


		cs.showImage = function (index) {
			cs.selectedIndex = index;
			cs.insImage = cs.consoleInstructions[index].image ? cs.consoleInstructions[index].image : ['app/assets/images/placeholder.png'];
			cs.multImages = cs.insImage.length > 1 ? true : false;
		};
	}

})();