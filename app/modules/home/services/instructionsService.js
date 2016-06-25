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
			remCablePc: {
				ins: 'Press "Cable/PC" button in top half of remote.',
				image: ['app/assets/images/remote/cablepc-min.png']
			},
			remDvdMusic: {
				ins: 'Press "DVD/Music" button in top half of remote.',
				image: ['app/assets/images/remote/dvd-min.png']
			},
			remPower: {
				ins: 'Press "Power" button in top half of remote while aiming at the Blu-Ray player.',
				image: ['app/assets/images/remote/power-min.png']
			},
			remChannel: {
				ins: 'Press the "Channel" up and down buttons to change channels.',
				image: ['app/assets/images/remote/channel-min.png']
			},
			remOne: {
				ins: 'Press the "1" button on the top half of the remote to the right of the "Input" button.',
				image: ['app/assets/images/remote/one-min.png']
			},
			remTwo: {
				ins: 'Press the "2" button on the top half of the remote to the right of the "Input" button.',
				image: ['app/assets/images/remote/two-min.png']
			},
			remThree: {
				ins: 'Press the "3" button on the top half of the remote to the right of the "Input" button.',
				image: ['app/assets/images/remote/three-min.png']
			},
			remFour: {
				ins: 'Press the "4" button on the top half of the remote to the right of the "Input" button.',
				image: ['app/assets/images/remote/four-min.png']
			},
			remArrows: {
				ins: 'Use arrow keys to navigate and "OK" button to select.',
				image: ['app/assets/images/remote/arrows-min.png']
			},
			remColors: {
				ins: 'The color buttons perform certain functions: red-> "Back", yellow-> "Options", blue-> "Home".',
				image: ['app/assets/images/remote/colors-min.png']
			},
			remFive: {
				ins: 'Press the "5" button on the top half of the remote to the right of the "Input" button.',
				image: ['app/assets/images/remote/five-min.png']
			},
			commentDvr: {
				ins: 'If you look at the surround receiver you should now see "DVR/VCR".',
				image: ['app/assets/images/receiver/dvrvcr-min.png']
			},
			commentDvd: {
				ins: 'If you look at the surround receiver you should now see "DVD".',
				image: ['app/assets/images/receiver/dvd-min.png']
			},
			commentTvSat: {
				ins: 'If you look at the surround receiver you should now see "TV/SAT".',
				image: ['app/assets/images/receiver/tvsat-min.png']
			},
			commentBd: {
				ins: 'If you look at the surround receiver you should now see "BD".',
				image: ['app/assets/images/receiver/bd-min.png']
			},
			commentRoku: {
				ins: 'You are set to use the Roku. If you see a solid color on the screen, press an arrow key to show the menu.',
				image: ['app/assets/images/remote/arrows-min.png']
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
			tvNavTv: {
				ins: 'Using the left and right arrow keys on the remote, navigate to "TV" and press the "OK" button.',
				image: ['app/assets/images/remote/arrows-min.png', 'app/assets/images/tv/tv-min.png']
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
						insert: 1,
						hd: false
					}
				},
				gamecube: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						portNumber: '2',
						power: ['app/assets/images/power/gamecubeconsole-min.png'],
						gbId: '3045-23',
						insert: 2,
						hd: false
					}
				},
				nes: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						portNumber: '3',
						power: ['app/assets/images/power/nesconsole-min.png'],
						gbId: '3045-21',
						insert: 1,
						hd: false,
						notes: ['The light gun doesn\'t work on modern TVs. Sorry.']
					}
				},
				n64: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						portNumber: '4',
						power: ['app/assets/images/power/n64console-min.png'],
						gbId: '3045-43',
						insert: 1,
						hd: false
					}
				},
				dreamcast: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavAv', 'remAvrGame', 'remFive', 'commentDvr', 'eightPortSwitch', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						portNumber: '5',
						power: ['app/assets/images/power/dreamcastconsole-min.png'],
						gbId: '3045-37',
						insert: 1,
						hd: false
					}
				},
				ps2: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavComp1', 'remAvrGame', 'remFive', 'commentDvr', 'loadGame',
						'powerOn', 'finishedOn'],
					params: {
						power: ['app/assets/images/power/ps2console-min.png'],
						gbId: '3045-19',
						insert: 2,
						hd: false
					}
				},
				ps3: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi2', 'remAvrGame', 'remFive', 'commentDvr', 'powerOn', 'loadGame',
						'finishedOn'],
					params: {
						power: ['app/assets/images/power/ps3remote-min.png', 'app/assets/images/power/ps3console-min.png'],
						gbId: '3045-35',
						insert: 1,
						hd: true
					}
				},
				wiiu: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi1', 'remAvrGame', 'remFour', 'commentDvd', 'powerOn',
						'loadGame', 'finishedOn'],
					params: {
						power: ['app/assets/images/power/wiiuremote-min.png', 'app/assets/images/power/wiiuconsole-min.png'],
						gbId: '3045-139',
						insert: 1,
						hd: true
					}
				},
				pc: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi3', 'remAvrGame', 'remFive', 'commentDvr', 'powerOn', 'keyboardAndMouse', 'finishedOn'],
					params: {
						power: ['app/assets/images/power/pcPower-min.png'],
						hd: true
					}
				},
				wii: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavComp2', 'remAvrGame', 'remFive', 'commentDvr', 'powerOn', 'loadGame',
						'finishedOn'],
					params: {
						power: ['app/assets/images/power/wiiremote-min.png', 'app/assets/images/power/wiiconsole-min.png'],
						gbId: '3045-36',
						insert: 1,
						hd: true,
						notes: ['The Wii is usually in Solis\' room, but I have component cables ready for it to be hooked up ' +
							'in the living room too. You just have to move the power cable with the Wii.']
					}
				},
				roku: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi1', 'remAvrGame', 'remOne', 'commentTvSat', 'remCablePc',
						'commentRoku', 'remArrows', 'remColors', 'finishedOn'],
					params: {
						notes: ['Some apps allow purchases so pay attention that you don\'t spend money!']
					}
				},
				antenna: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavTv', 'remAvrGame', 'remFive', 'commentDvr', 'remChannel',
						'finishedOn'],
					params: {
						notes: ['We\'re kind of out in the sticks so don\'t be surprised if reception is spotty.']
					}	
				},
				bluray: {
					arr: ['remTvMedia', 'remTvInput', 'tvNavHdmi1', 'remAvrGame', 'remTwo', 'commentBd', 'remDvdMusic', 'remPower',
						'finishedOn'],
					params: {
						notes: ['The buttons for play, pause, stop, and skip work as you would expect.',
							'Our Blu-Ray player setup on the universal remote is mostly there,' +
							' but for advanced functionality you\'ll have to resort to using the LG' +
							' Blu-Ray remote (the non-glossy/flat LG remote) for the player.']
					}	
				}
			};

			return consoleArrs[con];
		}

		function getConsoleInstructions (insArr, optParams, con) {
			var finalInsSet = [],
				instruction;
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
			getConsoleInstructions: getConsoleInstructions,
			getInsList: function () {
				return insList;
			}
		};
	}
})();