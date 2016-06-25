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


		ic.addTemplate = angular.element(
			'<div layout="row">' +
				'<div layout="column">' +
					'<md-input-container>' + 
						'<md-select ng-model="ic.insArr">' +
							'<md-option ng-repeat="item in ic.insList">' +
								'{{item.ins}}' +
							'</md-option>' +
						'</md-select>' +
					'</md-input-container>' +
				'</div>' +
				'<div layout="column">' +
					'<md-button ng-click="ic.addAnother()">' +
						'<i class="fa fa-plus" aria-hidden="true"></i>' +
					'</md-button>' +
				'</div>' +
			'</div><br />'
		);

		ic.addAnother = function () {
			console.log('adding row');
			var newRow = $compile(ic.addTemplate)($scope);
			$('#ins-area').append(newRow);
		};

		(function () {
			ic.insList = InstructionsService.getInsList();
			console.log('list', ic.insList);
			$timeout(function () { ic.addAnother(); }, 300);
		})();
		
	}
})();