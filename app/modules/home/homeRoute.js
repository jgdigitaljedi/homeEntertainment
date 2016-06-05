
	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

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
				url:'/:activity/:console',
				templateUrl: 'app/modules/home/consoles/console.html',
				controller: 'ConsoleCtrl',
				controllerAs: 'cs',
			}).state('home.games', {
				url: '/:activity/:console/games',
				templateUrl: 'app/modules/home/consoles/games.html',
				controller: 'GamesCtrl',
				controllerAs: 'gc'
			});			
	}]);
