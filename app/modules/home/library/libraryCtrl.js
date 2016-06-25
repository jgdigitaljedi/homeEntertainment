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

	Library.$inject = ['$scope', '$state', 'LibraryService', 'GiantbombService', 'HelpersService'];

	function Library ($scope, $state, LibraryService, GiantbombService, HelpersService) {
		var lc = this;
		var dateFormats = HelpersService.dateFormats();

		lc.searchOptions = {
			games: [{key: 'name', value: 'Name'}, {key: 'con', value: 'Console'}, {key: 'gbId', value: 'GB ID'}, 
				{key: 'year', value: 'Year Released'}, {key: 'genre', value: 'Genre'}],
			con: [{key: 'name', value: 'Name'}, {key: 'manufacturer', value: 'Manufacturer'}, {key: 'gbId', value: 'GB ID'}, {key: 'year', value: 'Year Released'}],
			search: [{key: 'games', value: 'Games'}, {key: 'con', value: 'Consoles'}]
		};

		lc.portOptions = ['NA', '1', '2', '3', '4', '5', '6', '7', '8'];

		lc.lookupGbInfo = function (id) {
			console.log('id', id);
			var whichFunction;
			if (lc.currentTab === 'games') {
				whichFunction = 'lookupGame';
			} else {
				whichFunction = 'lookupConsole';
			}
			GiantbombService[whichFunction](id).then(function (result) {
				console.log('result', result);
				if (result.original_release_date) {
					result.original_release_date = moment(result.original_release_date).format(dateFormats.abbrMonth);
				}
				if (result.release_date) {
					result.release_date = moment(result.release_date).format(dateFormats.abbrMonth);
				}
				lc.gbSearchResult = result;
			});
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
							if (!data.gameConsole || !data.gbId) {
								console.log('you can\'t leave shit out');
							} else {
								LibraryService.addGame(data, lc.gbSearchResult).then(function (result) {
									console.log('result from db game add', result);
								});								
							}
							break;
						case 'con': 
							if (!data.gbId) {
								console.log('you can\'t leave shit out');
							} else {
								LibraryService.addConsole(data, lc.gbSearchResult).then(function (result) {
									console.log('result from db console add', result);
								});								
							}
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

		lc.searchRequested = function () {
			console.log('first opts', lc.whichSearch);
			console.log('second opts', lc.extraSearch);
			console.log('search param', lc.searchParam);
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