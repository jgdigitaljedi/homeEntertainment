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

		function commafy (num) {
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

		function compareRatingToAge (rating) {
			var age;
			switch (rating) {
				case 'ESRB: 10+':
					age = 10;
					break;
				case 'ESRB: T':
					age = 12;
					break;
				case 'ESRB: M':
					age = 17;
					break;
				default: 
					age = false;
					break;
			}
			return age;
		}

		function solisAppropriate (rating) { // TODO: make ratings relate to ages so this will adjust as he gets older
			var solisAge = moment().diff('2009-01-07', 'years'),
				verdict,
				styler,
				ratingAge = compareRatingToAge(rating);
			if (ratingAge) {
				var ageDiff = Math.abs(solisAge - ratingAge);
				if (ageDiff < 4) {
					verdict = 'Yeah, it\'s probably alirght for him to play it.';
					styler = 'good';
				} else if (ageDiff > 3 && ageDiff < 6) {
					verdict = 'Questionable. Probably fine but might contain some more mature content. Use your best judgment.';
					styler = 'warn';
				} else if (ageDiff === 6) {
					verdict = 'Probably not. I\'m sure there are some exceptions here, but if you don\'t want to make the call I\'d say NO.';
					styler = 'nope';
				} else if (ageDiff > 6 && ageDiff < 10) {
					verdit = 'Decidedly "NO"!';
					styler = 'nope';
				} else {
					verdict = 'NOT NO BUT HELL NO!!!!!';
					styler = 'danger';
				}
			} else {
				switch (rating) {
					case 'ESRB: EC':
						verdict = 'Yeah, but it is probably targetted at a younger audience and might not keep his attention.';
						styler = 'good';
						break;
					case 'ESRB: E':
						verdict = 'Absolutely!';
						styler = 'good';
						break;
					default:
						verdict = 'Not sure. Read the description and use your best judgment.';
						styler = 'warn';
						break;
				}
			}
			return {answer: verdict, style: styler};
		}


		return {
			commafy: commafy,
			dateFormats: dateFormats,
			consoleTitle: consoleTitle,
			solisAppropriate: solisAppropriate
		};
	}
})();