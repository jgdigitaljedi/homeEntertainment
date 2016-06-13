(function () {
	'use strict';

	/**
	* @ngdoc configuration file
	* @name app.config:config
	* @description
	* # Config and run block
	* Configutation of the app
	*/


	angular
		.module('home-control')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		// $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		$httpProvider.defaults.headers.common = {};
		$httpProvider.defaults.headers.post = {};
		$httpProvider.defaults.headers.put = {};
		$httpProvider.defaults.headers.patch = {};

		// var customPrimary = {
  //       '50': '#c99990',
  //       '100': '#c1897f',
  //       '200': '#b97a6e',
  //       '300': '#b06a5c',
  //       '400': '#a45d4f',
  //       '500': '#935347',
  //       '600': '#82493f',
  //       '700': '#714036',
  //       '800': '#5f362e',
  //       '900': '#4e2c26',
  //       'A100': '#d2a9a1',
  //       'A200': '#dab9b2',
  //       'A400': '#e2c8c4',
  //       'A700': '#3d221d'
  //   };
  //   $mdThemingProvider
  //       .definePalette('customPrimary', 
  //                       customPrimary);

  //   var customAccent = {
  //       '50': '#7c613a',
  //       '100': '#8d6e42',
  //       '200': '#9e7c4b',
  //       '300': '#ae8954',
  //       '400': '#b79565',
  //       '500': '#bfa177',
  //       '600': '#cfb999',
  //       '700': '#d7c5ab',
  //       '800': '#dfd1bc',
  //       '900': '#e8ddcd',
  //       'A100': '#cfb999',
  //       'A200': '#c7ad88',
  //       'A400': '#bfa177',
  //       'A700': '#f0e9df'
  //   };
  //   $mdThemingProvider
  //       .definePalette('customAccent', 
  //                       customAccent);

  //   var customWarn = {
  //       '50': '#ffffff',
  //       '100': '#ffffff',
  //       '200': '#ffffff',
  //       '300': '#fbfaf3',
  //       '400': '#f4f1e1',
  //       '500': '#ede9ce',
  //       '600': '#e6e1bb',
  //       '700': '#dfd8a9',
  //       '800': '#d8d096',
  //       '900': '#d2c783',
  //       'A100': '#ffffff',
  //       'A200': '#ffffff',
  //       'A400': '#ffffff',
  //       'A700': '#cbbf71'
  //   };
  //   $mdThemingProvider
  //       .definePalette('customWarn', 
  //                       customWarn);

  //   var customBackground = {
  //       '50': '#a5afab',
  //       '100': '#97a39f',
  //       '200': '#8a9692',
  //       '300': '#7c8a86',
  //       '400': '#707d79',
  //       '500': '#64706c',
  //       '600': '#58635f',
  //       '700': '#4c5552',
  //       '800': '#404845',
  //       '900': '#343a38',
  //       'A100': '#b2bbb8',
  //       'A200': '#c0c7c4',
  //       'A400': '#cdd3d1',
  //       'A700': '#282d2b'
  //   };
  //   $mdThemingProvider
  //       .definePalette('customBackground', 
  //                       customBackground);

  //  $mdThemingProvider.theme('default')
  //      .primaryPalette('customPrimary')
  //      .accentPalette('customAccent')
  //      .warnPalette('customWarn')
  //      .backgroundPalette('customBackground');

		$mdThemingProvider.theme('default')
		    .primaryPalette('blue-grey')
		    .accentPalette('amber')
		    .warnPalette('red')
		    .dark();

		
			$urlRouterProvider
			.otherwise('/dashboard');
			
			}

			runBlock.$inject = ['$rootScope'];

			function runBlock($rootScope) {

				console.log('AngularJS run() function...');
			}


		})();
