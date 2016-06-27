(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:remotevisualCtrl
	* @description
	* # remotevisualCtrl
	* Controller of the app
	*/

	angular
		.module('home-control')
		.controller('InsRowCtrl', InsRow );

		InsRow.$inject = ['$element', '$compile', '$scope'];

		function InsRow($element, $compile, $scope) {
			/*jshint validthis: true */
			var vm = this;

			var $ = function(selector){
			  return angular.element(document.querySelectorAll(selector));
			};
			vm.addAnother = function () {
				var another = $compile('<ins-row sel-options="insList" chosen="{result: \'\'}"></ins-row>')($scope);
				$element.parent().append(another);
			};
		}

})();
