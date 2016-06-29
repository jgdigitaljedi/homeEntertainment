(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:failedAuthCtrl
	* @description
	* # failedAuthCtrl
	* Controller for failedAuth directive
	*/

	angular
		.module('home-control')
		.controller('FailedAuthCtrl', FailedAuth );

		FailedAuth.$inject = ['$element', '$compile', '$scope'];

		function FailedAuth($element, $compile, $scope) {
			/*jshint validthis: true */
			var fa = this;

			var $ = function(selector){
			  return angular.element(document.querySelectorAll(selector));
			};
			
		}

})();
