(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:InsCtrl
	* @description controller for adding console instructions
	* # InsCtrl
	* Controller of console instructions modal
	*/

	angular
		.module('home-control')
		.controller('InsCtrl', Ins);

	Ins.$inject = ['$scope', 'HelpersService', '$mdDialog', 'InstructionsService', '$compile', '$timeout'];

	function Ins ($scope, HelpersService, $mdDialog, InstructionsService, $compile, $timeout) {
		var ic = this;

		var $ = function(selector){
		  return angular.element(document.querySelectorAll(selector));
		};
		
		(function () {
			var insList = InstructionsService.getInsList();
			ic.masterList = insList;
			ic.insList = [];
			for (var key in insList) {
				ic.insList.push({name: key, ins: insList[key].ins});
			}
			console.log('list', ic.insList);
		})();
		
	}
})();