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
			remTvMedia: {
				ins: 'Press "TV/Media" button in top half of remote.',
				image: ['app/assets/images/remote/tvmedia-min.png']
			},
			remTvInput: {
				ins: 'Press "Input" button in top half of remote.',
				image: ['app/assets/images/remote/input-min.png']
			},
			remAvrGame: {
				ins: 'Press "AVR/Game" button in top half of remote.',
				image: ['app/assets/images/remote/avr-min.png']
			},
			remFive: {
				ins: 'Press the "5" button on the top half of the remote to the right of the "Input" button.',
				image: ['app/assets/images/remote/five-min.png']
			},
			remFour: {
				ins: 'Press the "4" button on the top half of the remote to the right of the "Input" button.',
				image: ['app/assets/images/remote/four-min.png']
			},
			commentDvr: {
				ins: 'If you look at the surround receiver you should now see "DVR/VCR".',
				image: ['app/assets/images/receiver/dvrvcr-min.png']
			},
			commentDvd: {
				ins: 'If you look at the surround receiver you should now see "DVD".',
				image: ['app/assets/images/receiver/dvd-min.png']
			},
			tvNavAv: {
				ins: 'Using the left and right arrow keys on the remote, navigate to "AV1" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/av1.png']
			},
			tvNavComp1: {
				ins: 'Using the left and right arrow keys on the remote, navigate to "Component1" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/comp1-min.png']
			},
			tvNavComp2: {
				ins: 'Using the left and right arrow keys on the remote, navigate to "Component2" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/comp2-min.png']
			},
			tvNavHdmi2: {
				ins: 'Using the left and right arrow keys on the remote, navigate to "HDMI2" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/hdmi2-min.png']
			},
			tvNavHdmi1: {
				ins: 'Using the left and right arrow keys on the remote, navigate to "HDMI1" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/hdmi1-min.png']
			},
			tvNavHdmi3: {
				ins: 'Using the left and right arrow keys on the remote, navigate to "HDMI3" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/hdmi3-min.png']
			},
			loadGame: {
				ins: 'Load game gently into console. See pictures for help. DON\'T LET SOLIS DO THIS!',
				image: false
			},
			eightPortSwitch: {
				ins: 'On the 8-port switch, press the purple button under "IN ',
				image: false
			},
			powerOn: {
				ins: 'Press the power button on the console.',
				image: false
			},
			keyboardAndMouse: {
				ins: 'Get the keyboard and mouse from under the coffee table.',
				image: false
			},
			finishedOn: {
				ins: 'Your done. Enjoy!',
				image: false
			}
		};



		function getInstructionArray (con) {
			var consoleArrs = {
				genesis: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						portNumber: '1',
						power: ['app/assets/images/power/genesisconsole-min.png'],
						gbId: '3045-6',
						insert: 1
					}
				},
				gamecube: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						portNumber: '2',
						power: ['app/assets/images/power/gamecubeconsole-min.png'],
						gbId: '3045-23',
						insert: 2
					}
				},
				nes: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						portNumber: '3',
						power: ['app/assets/images/power/nesconsole-min.png'],
						gbId: '3045-21',
						insert: 1
					}
				},
				n64: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						portNumber: '4',
						power: ['app/assets/images/power/n64console-min.png'],
						gbId: '3045-43',
						insert: 1
					}
				},
				ps2: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavComp1', 'remAvrGame', 'remFive', 'commentDvr', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						power: ['app/assets/images/power/ps2console-min.png'],
						gbId: '3045-19',
						insert: 2
					}
				},
				ps3: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi2', 'remAvrGame', 'remFive', 'commentDvr', 'powerOn', 'loadGame',
						'finishedOn'],
					params: {
						power: ['app/assets/images/power/ps3remote-min.png', 'app/assets/images/power/ps3console-min.png'],
						gbId: '3045-35',
						insert: 1
					}
				},
				wiiu: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi1', 'remAvrGame', 'remFour', 'commentDvd', 'powerOn',
						'loadGame', 'finishedOn'],
					params: {
						power: ['app/assets/images/power/wiiuremote-min.png', 'app/assets/images/power/wiiuconsole-min.png'],
						gbId: '3045-139',
						insert: 1
					}
				},
				pc: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi3', 'remAvrGame', 'remFive', 'commentDvr', 'powerOn', 'keyboardAndMouse', 'finishedOn'],
					params: {
						power: ['app/assets/images/power/pcPower-min.png']
					}
				},
				wii: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavComp2', 'remAvrGame', 'remFive', 'commentDvr', 'powerOn', 'loadGame',
						'finishedOn'],
					params: {
						power: ['app/assets/images/power/wiiremote-min.png', 'app/assets/images/power/wiiconsole-min.png'],
						gbId: '3045-36',
						insert: 1
					}
				},
				roku: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi1', 'remAvrGame', 'remOne', 'commentTvSat', 'remCablePc',
						'finishedOn'],
					params: {
						notes: ['Use arrow keys on remote and \'OK\' button to navigate.', 
							'Some apps allow purchases so pay attention that you don\'t spend money!']
					}
				}
			};

			return consoleArrs[con];
		}

		function getConsoleInstructions (insArr, optParams, con) {
			var finalInsSet = [],
				instruction;
			console.log('console', con);
			insArr.forEach(function (item, index) {
				if (item === 'eightPortSwitch') {
					var eps = {ins: '', image: ''};
					eps.ins = insList[item].ins + optParams.portNumber + '"';
					eps.image = ['app/assets/images/switch/' + optParams.portNumber + '-min.png'];
					finalInsSet.push(eps);
				} else if (item === 'powerOn') {
					var power = {ins: '', image: ''};
					power.ins = insList[item].ins;
					power.image = optParams.power ? optParams.power : false;
					finalInsSet.push(power);
				} else if (item === 'loadGame') {
					var insert = {ins: insList[item].ins, image: []},
						dir = 'app/assets/images/insertGame/';
					if (optParams.insert < 2) {
						insert.image.push(dir + con + 'Insert-min.png');
					} else {
						insert.image.push(dir + con + 'Open-min.png');
						insert.image.push(dir + con + 'Insert-min.png');
					}
					finalInsSet.push(insert);
				} else {
					finalInsSet.push(insList[item]);					
				}
			});

			return finalInsSet;
		}

		return {
			getInstructionArray: getInstructionArray,
			getConsoleInstructions: getConsoleInstructions
		};
	}
})();