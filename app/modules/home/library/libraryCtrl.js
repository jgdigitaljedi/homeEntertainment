(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LibraryCtrl
	* @description controller for library views
	* # LibraryCtrl
	* Controller of library views
	*/

	angular
		.module('home-control')
		.controller('LibraryCtrl', Library);

	Library.$inject = ['$scope', '$state', 'LibraryService', 'GiantbombService'];

	function Library ($scope, $state, LibraryService, GiantbombService) {
		var lc = this;

		lc.searchOptions = {
			games: ['Name', 'Console', 'GB ID', 'Year Released', 'Genre'],
			con: ['Name', 'Manufacturer', 'GB ID', 'Year Released'],
			search: ['Games', 'Consoles']
		};

		lc.action = {
			add: {
				init: function () {
					switch(lc.currentTab) {
						case 'games':
							console.log('action is add.init with what === ' + lc.currentTab);
							break;
						case 'con': 
							console.log('action is add.init with what === ' + lc.currentTab);
							break;
					}					
				},
				submit: function (data) {
					switch(lc.currentTab) {
						case 'games':

							break;
						case 'con': 

							break;
					}
				}
			},
			edit: {
				init: function () {
					switch(lc.currentTab) {
						case 'games':
							console.log('action is edit.init with what === ' + lc.currentTab);
							break;
						case 'con': 
							console.log('action is edit.init with what === ' + lc.currentTab);
							break;
					}					
				},
				submit: function (data) {
					switch(lc.currentTab) {
						case 'games':

							break;
						case 'con': 

							break;
					}
				}
			},
			delete: {
				init: function () {
					switch(lc.currentTab) {
						case 'games':
							console.log('action is delete.init with what === ' + lc.currentTab);
							break;
						case 'con': 
							console.log('action is delete.init with what === ' + lc.currentTab);
							break;
					}					
				},
				submit: function (data) {
					switch(lc.currentTab) {
						case 'games':

							break;
						case 'con': 

							break;
					}
				}
			},
			search: function (data) {

			}
		};

		lc.changeAction = function (arr) {
			arr = arr.split(',');
			lc.currentActivity = arr[0];
			lc.action[arr[0]][arr[1]]();
		};

		function initDefaults () {
			lc.currentTab = 'search';
			lc.currentActivity = 'search';
		}



		(function () {
			initDefaults();
		})();
	}
})();