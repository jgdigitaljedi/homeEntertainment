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

	Library.$inject = ['$scope', '$state'];

	function Library ($scope, $state) {
		var lc = this;

		
	}
})();