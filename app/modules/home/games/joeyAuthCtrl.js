(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:JoeyAuthCtrl
	* @description make sure that not just anyone can modify my games library
	* # GamesDialogCtrl
	* Controller of the authentication functionality
	*/

	angular
		.module('home-control')
		.controller('JoeyAuthCtrl', JAuth);

	JAuth.$inject = ['HelpersService', 'game', '$q', '$mdDialog'];


	function JAuth (HelpersService, game, $q, $mdDialog) {
		var ja = this;

		ja.auth = function () {
			var pass = CryptoJS.SHA1(ja.joeyAuth),
				concatPass = '';

			console.log('pass', pass.words);
			pass.words.forEach(function (item, index) {
				concatPass += item.toString();
			});
			console.log('auth', concatPass);
		};

	}
})();