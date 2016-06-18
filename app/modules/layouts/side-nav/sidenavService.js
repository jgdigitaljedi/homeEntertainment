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
		var menu = {
			play: [
				{
					link: 'dreamcast',
					name: 'Dreamcast',
					image: 'app/assets/images/dreamcast.png'
				},
				{
					link: 'gamecube',
					name: 'Gamecube',
					image: 'app/assets/images/gamecube.png'
				},
				{
					link: 'genesis',
					name: 'Genesis',
					image: 'app/assets/images/genesis.png'
				},
				{
					link: 'n64',
					name: 'N64',
					image: 'app/assets/images/n64.png'
				},
				{
					link: 'nes',
					name: 'NES',
					image: 'app/assets/images/nes.png'
				},
				{
					link: 'pc',
					name: 'PC',
					image: 'app/assets/images/pc.png'
				},
				{
					link: 'ps2',
					name: 'PS2',
					image: 'app/assets/images/ps2.png'
				},
				{
					link: 'ps3',
					name: 'PS3',
					image: 'app/assets/images/ps3.png'
				},
				{
					link: 'wii',
					name: 'Wii',
					image: 'app/assets/images/wii.png'
				},
				{
					link: 'wiiu',
					name: 'Wii U',
					image: 'app/assets/images/wiiu.png'
				}
			],
			watch: [
				{
					link: 'roku',
					name: 'Roku',
					image: 'app/assets/images/roku.png'
				},
				{
					link: 'antenna',
					name: 'Over-The-Air TV',
					image: 'app/assets/images/antenna.png'
				},
				{
					link: 'bluray',
					name: 'Blu-Ray',
					image: 'app/assets/images/bluray.png'
				}
			]
		};

		return {
			listMenu: function () {
				return menu;
			}
		};

	}

})();
