(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('home-control')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService', '$scope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService, $scope) {
		/*jshint validthis: true */
		var vm = this;
		vm.activity = {
			home: true,
			play: false,
			watch: false
		};
		vm.title = "Gauthier Home Control Center";
		vm.version = "version 0.9";

		vm.changeActivity = function (activities) {
			console.log('chaging', activities);
			vm.activity = activities;
			for (var act in activities) {
				if (activities[act]) vm.listFeatures = homeService.getFeaturesList(act);
			}
		};

		// vm.listFeatures = homeService.getFeaturesList(vm.activity);
		// vm.activity.home = true;
	}

})();
