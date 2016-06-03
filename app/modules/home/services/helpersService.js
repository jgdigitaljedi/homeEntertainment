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


		return {
			commify: commify
		};
	}
})();