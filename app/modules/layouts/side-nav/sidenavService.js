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
		var menu = [
			{
				link: '.',
				name: 'Sega Genesis',
				image: 'app/assets/images/genesis.png'
			},
			{
				link: '.',
				name: 'Gamecube',
				image: 'app/assets/images/gamecube.png'
			},
			{
				link: '.',
				name: 'NES',
				image: 'app/assets/images/nes.png'
			},
			{
				link: '.',
				name: 'N64',
				image: 'app/assets/images/n64.png'
			},
			{
				link: '.',
				name: 'PS2',
				image: 'app/assets/images/ps2.png'
			},
			{
				link: '.',
				name: 'PS3',
				image: 'app/assets/images/ps3.png'
			},
			{
				link: '.',
				name: 'PC',
				image: 'app/assets/images/pc.png'
			},
			{
				link: '.',
				name: 'Wii U',
				image: 'app/assets/images/wiiu.png'
			},
			{
				link: '.',
				name: 'Wii',
				image: 'app/assets/images/wii.png'
			}
		];

		return {
			listMenu: function () {
				return menu;
			}
		};

	}

})();
