
	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

// instead of going dynamic with the console pages I gave them dedicated files
//because I eventually plan to create a database with my game library for each
//and pull game data from an online source. Could have been dynamic, but I might
//eventually want some unique elements for each console page.

angular.module('home-control')
	.config(['$stateProvider', function ($stateProvider) {
		'use strict';
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			})
			.state('home.console', {
				url:'/console/:console',
				templateUrl: 'app/modules/home/consoles/console.html',
				controller: 'ConsoleCtrl',
				controllerAs: 'cs'
			});
			
	}]);
