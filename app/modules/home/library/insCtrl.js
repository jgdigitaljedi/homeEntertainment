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
		var ic = this,
			counter = 0;

		var $ = function(selector){
		  return angular.element(document.querySelectorAll(selector));
		};

		ic.insArr = {};

		function newRow () {
			var newTemp = '<tr class="ins-row">' +
								'<td>' +
									'<md-input-container> ' +
										'<md-select ng-model="ic.insArr[' + counter + ']" ng-change="ic.newValue()">' +
											'<md-option ng-repeat="item in ic.insList" value="{{item.name}}">' +
												'{{item.ins}}' +
											'</md-option>' +
										'</md-select>' +
									'</md-input-container>' +
								'</td>' +
								'<td>' +
									'<md-button ng-click="ic.addAnother()">' +
										'<i class="fa fa-plus" aria-hidden="true"></i>' +
									'</md-button>' +
								'</td>' +
							'</tr>';

			return $compile(newTemp)($scope);
		}

		ic.addAnother = function () {
			$('#ins-area').append(new newRow());
			counter++;
		};

		ic.saveInstructions = function () {
			var insSet = [];
			for (var ins in ic.insArr) {
				insSet.push(ic.insArr[ins]);
			}
			$mdDialog.hide(insSet);
		};
		
		(function () {
			var insList = InstructionsService.getInsList();
			ic.masterList = insList;
			ic.insList = [];
			for (var key in insList) {
				ic.insList.push({name: key, ins: insList[key].ins});
			}
			$timeout(function () { ic.addAnother(); }, 300);
		})();
		
	}
})();