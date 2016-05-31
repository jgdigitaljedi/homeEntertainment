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
			remTvMedia: {ins: 'Press "TV/Media" button in top half of remote.',
				image: ['app/assets/images/remote/tvmedia-min.png']},
			remTvInput: {ins: 'Press "Input" button in top half of remote.',
				image: ['app/assets/images/remote/input-min.png']},
			remAvrGame: {ins: 'Press "AVR/Game" button in top half of remote.',
				image: ['app/assets/images/remote/avr-min.png']},
			remFive: {ins: 'Press the "5" button on the top half of the remote to the right of the "Input" button.',
				image: ['app/assets/images/remote/five-min.png']},
			remFour: {ins: 'Press the "4" button on the top half of the remote to the right of the "Input" button.',
				image: ['app/assets/images/remote/four-min.png']},
			commentDvr: {ins: 'If you look at the surround receiver you should now see "DVR/VCR".',
				image: ['app/assets/images/receiver/dvrvcr-min.png']},
			commentDvd: {ins: 'If you look at the surround receiver you should now see "DVD".',
				image: ['app/assets/images/receiver/dvd-min.png']},
			tvNavAv: {ins: 'Using the left and right arrow keys on the remote, navigate to "AV1" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/av1.png']},
			tvNavComp1: {ins: 'Using the left and right arrow keys on the remote, navigate to "Component1" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/comp1-min.png']},
			tvNavComp2: {ins: 'Using the left and right arrow keys on the remote, navigate to "Component2" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/comp2-min.png']},
			tvNavHdmi2: {ins: 'Using the left and right arrow keys on the remote, navigate to "HDMI2" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/hdmi2-min.png']},
			tvNavHdmi1: {ins: 'Using the left and right arrow keys on the remote, navigate to "HDMI1" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/hdmi1-min.png']},
			tvNavHdmi3: {ins: 'Using the left and right arrow keys on the remote, navigate to "HDMI3" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/hdmi3-min.png']},
			eightPortSwitch: {ins: 'On the 8-port switch, press the purple button under "IN ',
				image: false},
			powerOn: {ins: 'Press the power button on the console.',
				image: false},
			powerWiiu: {ins: 'Press the power button on the big Wii U remote.',
				image: false},
			powerPs3: {ins: 'Press the "PS" button on the PS3 remote.',
				image: false},
			powerPc: {ins: 'Press the big silver power button on the top left corner of the PC.',
				image: false},
			keyboardAndMouse: {ins: 'Get the keyboard and mouse from under the coffee table.',
				image: false},
			finishedOn: {ins: 'Your done. Enjoy!',
				image: false}
		};


		return {
			getInstructionArray: getInstructionArray,
			getConsoleInstructions: getConsoleInstructions
		};

		function getInstructionArray (con) {
			var consoleArrs = {
				genesis: {arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'powerOn', 'finishedOn'],
					params: {portNumber: '1'}},
				gamecube: {arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'powerOn', 'finishedOn'],
					params: {portNumber: '2'}},
				nes: {arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'powerOn', 'finishedOn'],
					params: {portNumber: '3'}},
				n64: {arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'powerOn', 'finishedOn'],
					params: {portNumber: '4'}},
				ps2: {arr: ['remTvMedia', 'remTvInput', 'tvNavComp1', 'remAvrGame', 'remFive', 'commentDvr', 'powerOn', 'finishedOn'],
					params: {holdOff: true}},
				ps3: {arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi2', 'remAvrGame', 'remFive', 'commentDvr', 'powerPs3', 'finishedOn'],
					params: {remoteOff: true}},
				wiiu: {arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi1', 'remAvrGame', 'remFour', 'commentDvd', 'powerWiiu', 'finishedOn'],
					params: {remoteOff: true}},
				pc: {arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi3', 'remAvrGame', 'remFive', 'commentDvr', 'powerPc', 'keyboardAndMouse',
					'finishedOn']},
				wii: {arr: ['remTvMedia', 'remTvInput', 'tvNavComp2', 'remAvrGame', 'remFive', 'commentDvr', 'powerOn',	'finishedOn']}, 

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
					eps.image = ['app/assets/images/switch/' + optParams.portNumber + '-min.png'];
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