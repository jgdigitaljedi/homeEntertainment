(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:remotevisualDirective
	* @description
	* # remotevisualDirective
	* Directive of the app
	*/

	angular
		.module('home-control')
		.directive('remoteVisual', remoteVisual);

		function remoteVisual () {

			var directive = {
				link: link,
				restrict: 'EA',
				controller: 'RemoteVisualCtrl',
				
				templateUrl:'app/modules/shared/directives/remotevisual/remotevisual.html',
				
			}

			return directive;

			function link(scope, element, attrs) {
				// write your code here
			}

		}

})();
