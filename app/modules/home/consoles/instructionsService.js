(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular
		.module('home-control')
		.factory('InstructionsService', Instructions);

	Instructions.$inject = ['$http'];

	function Instructions ($http) {

		var insList = {
			remTvMedia: {ins: 'Press "TV/Media" button in top half of remote.', image: false},
			remAvrGame: {ins: 'Press "AVR/Game" button in top half of remote.', image: false},
			remFive: {ins: 'Press the "5" button on the top half of the remote to the right of the "Input" button.', image: false},
			commentDvr: {ins: 'If you look at the surround receiver you should now see "DVR/VCR".', image: false},
			tvNavAv: {ins: 'Using the left and right arrow keys on the remote, navigate to "AV1" and press the "OK" button.', image: false},
			eightPortSwitch: {ins: 'On the 8-port switch, press the purple button under IN ', image: false}
		};


		return {
			getInstructionArray: getInstructionArray,
			getConsoleInstructions: getConsoleInstructions
		};

		function getInstructionArray (con) {
			var consoleArrs = {
				genesis: {arr: ['remTvMedia', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch'], params: {portNumber: '1'}}
			};

			return consoleArrs[con];
		}

		function getConsoleInstructions (insArr, optParams) {
			var finalInsSet = [];

			insArr.forEach(function (item) {
				var instruction = insList[item];
				if (item === 'eightPortSwitch') {
					instruction += optParams.portNumber;
				}
				finalInsSet.push(instruction);
			});

			return finalInsSet;
		}

	}

})();