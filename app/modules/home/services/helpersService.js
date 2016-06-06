(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:helpersService
	* @description place for global helper functions
	* # helpersService
	* put your helper functions here
	*/

	angular
		.module('home-control')
		.factory('HelpersService', Helpers);

	Helpers.$inject = ['$q'];

	function Helpers ($q) {

		function commify (num) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

		function dateFormats () {
			return {
				abbrMonth: 'MMM D, YYYY'
			};
		}

		function consoleTitle (con) {
			var title;
			var conSplit = con.split(' '); // here in case future additions need it
			switch (con) {
				case 'ps2':
				case 'ps3':
					title = con.charAt(0).toUpperCase() + con.charAt(1).toUpperCase() + ' ' + con.charAt(2);
					break;
				case 'wiiu':
					title = 'Wii U';
					break;
				case 'pc':
				case 'nes':
					title = con.toUpperCase();
					break;
				case 'bluray':
					title = 'Blu-Ray';
					break;
				default:
					if (conSplit.length === 1) return con.charAt(0).toUpperCase() + con.slice(1);
					conSplit.forEach(function (item, index){
						consSplit[index] = item.charAt(0).toUpperCase() + item.slice(1);
					});
					title = conSplit.join();
					break;
			}
			return title;
		}


		return {
			commify: commify,
			dateFormats: dateFormats,
			consoleTitle: consoleTitle
		};
	}
})();