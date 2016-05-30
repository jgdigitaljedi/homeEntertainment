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
			tvNavComp1: {ins: 'Using the left and right arrow keys on the remote, navigate to "Composite1" and press the "OK" button.', image: false},
			eightPortSwitch: {ins: 'On the 8-port switch, press the purple button under "IN ', image: false},
			powerOn: {ins: 'Press the power button on the console.', image: false},
			finishedOn: {ins: 'Your done. Enjoy!', image: false}
		};


		return {
			getInstructionArray: getInstructionArray,
			getConsoleInstructions: getConsoleInstructions
		};

		function getInstructionArray (con) {
			var consoleArrs = {
				genesis: {arr: ['remTvMedia', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'powerOn', 'finishedOn'],
					params: {portNumber: '1'}},
				gamecube: {arr: ['remTvMedia', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'powerOn', 'finishedOn'],
					params: {portNumber: '2'}},
				nes: {arr: ['remTvMedia', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'powerOn', 'finishedOn'],
					params: {portNumber: '3'}},
				n64: {arr: ['remTvMedia', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'powerOn', 'finishedOn'],
					params: {portNumber: '4'}},
				ps2: {arr: ['remTcMedia', 'tvNavComp1', 'remAvrGame', 'remFive', 'commentDvr', 'powerOn', 'finishedOn']}
			};

			return consoleArrs[con];
		}

		function getConsoleInstructions (insArr, optParams) {
			var finalInsSet = [],
				instruction;

			insArr.forEach(function (item, index) {
				if (item === 'eightPortSwitch') {
					var eps = {ins: '', image: ''};
					eps.ins = insList[item].ins + optParams.portNumber + '"';
					eps.image = insList[item].image;
					finalInsSet.push(eps);
				} else {
					finalInsSet.push(insList[item]);					
				}
				// instruction = insList[item];
			});

			return finalInsSet;
		}

	}

})();