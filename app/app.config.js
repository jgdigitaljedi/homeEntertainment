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
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

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
