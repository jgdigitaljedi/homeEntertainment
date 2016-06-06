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

		function solisAppropriate (rating) { // TODO: make ratings relate to ages so this will adjust as he gets older
			var solisAge = moment().diff('2009-01-07', 'years'),
				verdict, styler;
			switch (rating) {
				case 'ESRB EC':
					verdict = 'Yeah, but it is probably targetted at a younger audience and might not keep his attention.';
					styler = 'good';
					break;
				case 'ESRB E':
					verdict = 'Absolutely!';
					styler = 'good';
					break;
				case 'ESRB E10+':
					verdict = 'Absolutely!';
					styler = 'warn';
					break;
				case 'ESRB T':
					verdict = 'Questionable. This was meant for teens. Might be ok, might not. Read the description and make the call.';
					styler = 'warn';
					break;
				case 'ESRB M':
					verdict = 'Questionable. This was meant for teens. Might be ok, might not. Read the description and make the call.';
					styler = 'warn';
					break;
				default:
					verdict = 'Not sure. Read the description and use your best judgment.';
					break;

			}
		}


		return {
			commafy: commafy,
			dateFormats: dateFormats,
			consoleTitle: consoleTitle,
			solisAppropriate: solisAppropriate
		};
	}
})();