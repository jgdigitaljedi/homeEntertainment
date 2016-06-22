
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
				params: {image: null}
			}).state('home.games', {
				url: '/:activity/:console/games',
				templateUrl: 'app/modules/home/games/games.html',
				controller: 'GamesCtrl',
				controllerAs: 'gc'
			}).state('home.server', {
				url: '/server-info',
				templateUrl: 'app/modules/home/server/server.html',
				controller: 'ServerCtrl',
				controllerAs: 'sc'
			}).state('home.library', {
				url: '/library',
				templateUrl: 'app/modules/home/library/library.html',
				controller: 'LibraryCtrl',
				controllerAs: 'lc'
			});			
	}]);
