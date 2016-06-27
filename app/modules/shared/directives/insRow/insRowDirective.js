(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:insRowDirective
	* @description
	* # insRowDirective
	* Directive of instructions button dialog in the library-consoles-add area
	*/

	angular
		.module('home-control')
		.directive('insRow', insRow);

		function insRow () {

			var directive = {
				link: link,
				scope: {
					selOptions: '=selOptions',
					userSel: '=?userSelelected'
				},
				restrict: 'EA',
				transclude: true,
				templateUrl:'app/modules/shared/directives/insRow/insRow.html',
				controller: 'InsRowCtrl as vm'
				
			};

			return directive;

			function link(scope, element, attrs, ctrl, transclude) {
				scope.insList = scope.selOptions;

				console.log('attrs', attrs);

				scope.newValue = function () {
					console.log('insArr', scope.insArr);
					delete scope.insArr.$$mdSelectId;
					scope.userSel = JSON.stringify(scope.insArr);				
				};
			}

		}

})();
