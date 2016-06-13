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

	Home.$inject = ['homeService', '$scope', '$state'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService, $scope, $state) {
		/*jshint validthis: true */
		var vm = this;
		vm.activity = {
			home: true,
			play: false,
			watch: false,
			server: false
		};
		vm.title = "Gauthier Home Control Center";
		vm.version = "version 0.9";

		vm.changeActivity = function (activities) {
			vm.activity = activities;
			for (var act in activities) {
				if (activities[act]) {
					vm.listFeatures = homeService.getFeaturesList(act);
					console.log('features', vm.listFeatures);
					if (!vm.listFeatures[0].feature) {
						$state.go('home.' + act);
					}
				}

			}
		};
	}

})();
