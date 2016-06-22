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
					image: 'app/assets/images/dreamcast.png',
					fontIcon: 'T'
				},
				{
					link: 'gamecube',
					name: 'Gamecube',
					image: 'app/assets/images/gamecube.png',
					fontIcon: '$'
				},
				{
					link: 'genesis',
					name: 'Genesis',
					image: 'app/assets/images/genesis.png',
					fontIcon: 'A'
				},
				{
					link: 'n64',
					name: 'N64',
					image: 'app/assets/images/n64.png',
					fontIcon: '#'
				},
				{
					link: 'nes',
					name: 'NES',
					image: 'app/assets/images/nes.png',
					fontIcon: 'n'
				},
				{
					link: 'pc',
					name: 'PC',
					image: 'app/assets/images/pc.png',
					fontIcon: 's'
				},
				{
					link: 'ps2',
					name: 'PS2',
					image: 'app/assets/images/ps2.png',
					fontIcon: '3'
				},
				{
					link: 'ps3',
					name: 'PS3',
					image: 'app/assets/images/ps3.png',
					fontIcon: '('
				},
				{
					link: 'wii',
					name: 'Wii',
					image: 'app/assets/images/wii.png',
					fontIcon: 'Ú'
				},
				{
					link: 'wiiu',
					name: 'Wii U',
					image: 'app/assets/images/wiiu.png',
					fontIcon: 'b'
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
