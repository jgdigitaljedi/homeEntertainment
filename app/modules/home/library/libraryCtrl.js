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

	Library.$inject = ['$scope', '$state', 'LibraryService', 'GiantbombService', 'HelpersService', '$mdDialog', '$http'];

	function Library ($scope, $state, LibraryService, GiantbombService, HelpersService, $mdDialog, $http) {
		var lc = this;
		var dateFormats = HelpersService.dateFormats();

		lc.searchOptions = {
			games: [{key: 'name', value: 'Name'}, {key: 'con', value: 'Console'}, {key: 'gbId', value: 'GB ID'}, 
				{key: 'year', value: 'Year Released'}, {key: 'genre', value: 'Genre'}],
			con: [{key: 'name', value: 'Name'}, {key: 'manufacturer', value: 'Manufacturer'}, {key: 'gbId', value: 'GB ID'}, {key: 'year', value: 'Year Released'}],
			search: [{key: 'games', value: 'Games'}, {key: 'con', value: 'Consoles'}]
		};

		lc.portOptions = ['NA', '1', '2', '3', '4', '5', '6', '7', '8'];

		$scope.uploadLogo = function (files) {
			var fd = new FormData();
			console.log('file', files[0]);
			lc.logoName = files[0].name;
			fd.append('file', files[0]);
			$http.post('http://localhost:8080/api/uploadconsolelogo', fd, {
		        headers: {'Content-Type': undefined },
		        transformRequest: angular.identity
		    }).then(function (result) {
				console.log('result from upload', result);
			});
		};

		lc.lookupGbInfo = function (id) {
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

		lc.openInstructionsDialog = function () {
			$mdDialog.show({
				templateUrl: 'app/modules/home/library/instructions.html',
				controller: 'InsCtrl as ic',
				clickOutsideToClose: true
			}).then(function (result) {
				if (result && result.length > 0) {
					lc.insDone = {icon: 'fa fa-check-circle fa-2x', color: '#2E7D32'};
					lc.instructions = result;
					console.log('goal is to have result be an instructions array', result);
				} else {
					console.log('something went wrong');
				}
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
								data.instructions = lc.instructions;
								data.listImage = lc.logoName;
								
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
			lc.insDone = {icon: 'fa fa-times-circle fa-2x', color: '#F44336'};
		}

		(function () {
			initDefaults();
		})();
	}
})();