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
		.controller('RemoteVisualCtrl', RemoteVisual );

		RemoteVisual.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function RemoteVisual() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
