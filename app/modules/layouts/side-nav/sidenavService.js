(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:menuService
	* @description
	* # menuService
	* Service of the app
	*/

	angular
		.module('home-control')
		.factory('MenuService', Menu);

	// Inject your dependencies as .$inject = ['$http', '$otherDependency'];
	// function Name ($http, $otherDependency) {...}

	Menu.$inject = ['$http'];

	function Menu($http) {
		// Sample code.

		var menu = [
			{
				link: '.',
				name: 'Sega Genesis'
			},
			{
				link: '.',
				name: 'Gamecube'
			},
			{
				link: '.',
				name: 'NES'
			},
			{
				link: '.',
				name: 'N64'
			},
			{
				link: '.',
				name: 'PS2'
			},
			{
				link: '.',
				name: 'PS3'
			},
			{
				link: '.',
				name: 'PC'
			},
			{
				link: '.',
				name: 'Wii U'
			},
			{
				link: '.',
				name: 'Wii'
			}
		];

		return {
			listMenu: function () {
				return menu;
			}
		};

	}

})();
