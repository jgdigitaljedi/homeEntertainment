(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:ServerCtrl
	* @description
	* # ConsoleCtrl
	* Controller of the console views
	*/

	angular
		.module('home-control')
		.controller('ServerCtrl', Server);

	Server.$inject = ['ServerService'];

	function Server(ServerService) {
		var sc = this;

		ServerService.getServerInfo().then(function (response) {
			console.log('response', response);
			response.forEach(function (item, index) {
				var nameProp = item.name.split(' ').join('');
				sc[nameProp] = item;
				sc[nameProp].value = item.value.data.replace(/[\u21B5]/g, '\n');
				sc[nameProp].value = item.value.replace('  ', '\n');
				console.log('this thing', sc[nameProp]);
			});
		});
	}
})();