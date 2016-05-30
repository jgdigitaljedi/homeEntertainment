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
		// plans to eventually create directive with static picture of remote
		//and use fabric.js to draw semi-transparent canvas highlights on the
		//buttons for each step.
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
