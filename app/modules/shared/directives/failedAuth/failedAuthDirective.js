(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:failedAuthDirective
	* @description
	* # failedAuthDirective
	* Directive for the little sub-header that slides in when a failed aithentication attempt occurs
	*/

	angular
		.module('home-control')
		.directive('failedAuth', failedAuth);

		function failedAuth () {

			var directive = {
				link: link,
				scope: {
					failureMessage: '=failureMessage'
				},
				restrict: 'EA',
				templateUrl:'app/modules/shared/directives/failedAuth/failedAuth.html',
				controller: 'FailedAuthCtrl as fa'
				
			};

			return directive;

			function link (scope, element, attrs, ctrl) {

			}

		}

})();