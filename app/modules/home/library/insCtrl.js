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


		var selectTemplate = //angular.element(
			'<div layout="row" class="ins-row">' +
				'<div>' +
					'<md-input-container>' + 
						'<md-select ng-model="ic.insArr">' +
							'<md-option ng-repeat="item in ic.insList">' +
								'{{item.ins}}' +
							'</md-option>' +
						'</md-select>' +
					'</md-input-container>' +
				'</div>' +
				'<div>' +
					'<md-button ng-click="ic.addAnother()">' +
						'<i class="fa fa-plus" aria-hidden="true"></i>' +
					'</md-button>' +
				'</div>' +
			'</div>';
		//);

			var insRows = '',
				newRow;
		ic.addAnother = function () {
			// $('#ins-area').append($compile('<ins-row sel-options="ic.insList"></ins-row>'));
			// insRows += selectTemplate;
			// newRow = $compile(angular.element(insRows))($scope);
			// console.log('adding row', insRows);
			// // $('#ins-area').append(selectTemplate);
			// $('#ins-area').html(newRow);
		};

		(function () {
			ic.insList = InstructionsService.getInsList();
			console.log('list', ic.insList);
			$timeout(function () { ic.addAnother(); }, 300);
		})();
		
	}
})();