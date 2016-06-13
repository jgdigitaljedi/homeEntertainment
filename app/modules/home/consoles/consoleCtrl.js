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

	Console.$inject = ['InstructionsService', '$stateParams', 'GiantbombService', 'HelpersService', '$state'];

	function Console(InstructionsService, $stateParams, GiantbombService, HelpersService, $state) {
		/*jshint validthis: true */
		/*jshint curly: false */
		var dateFormats = HelpersService.dateFormats(),
			cs = this,
			con = $stateParams.console;
		
		cs.activity = $stateParams.activity;
		cs.titleImage = $stateParams.image;
		cs.console = HelpersService.consoleTitle(con);
		cs.consoleParams = InstructionsService.getInstructionArray(con);
		cs.consoleInstructions = InstructionsService.getConsoleInstructions(cs.consoleParams.arr, cs.consoleParams.params, con);
		cs.selectedIndex = 0;
		cs.insImage = cs.consoleInstructions[0].image || ['app/assets/images/placeholder.png'];

		if (cs.activity === 'play') {
			cs.activtyNotes = '';
			cs.showNotes = false;
			GiantbombService.lookupConsole(cs.consoleParams.params.gbId).then(function (response) {
				if (response.error) {
					cs.showDetails = false;
				} else {
					cs.showDetails = true;
					cs.consoleInfo = response;
					cs.consoleInfo.release_date = moment(cs.consoleInfo.release_date).format(dateFormats.abbrMonth);
					cs.consoleInfo.install_base = HelpersService.commafy(cs.consoleInfo.install_base);				
				}
			});
		} else {
			cs.showDetails = false;
			cs.showNotes = true;
			cs.activtyNotes = cs.consoleParams.params.notes;
		}

		cs.showImage = function (index) {
			cs.selectedIndex = index;
			cs.insImage = cs.consoleInstructions[index].image ? cs.consoleInstructions[index].image : ['app/assets/images/placeholder.png'];
			cs.multImages = cs.insImage.length > 1 ? true : false;
		};

		cs.goToGames = function () {
			if (cs.activity === 'play') $state.go('home.games', {activity: 'play', console: con});
		};
	}
})();