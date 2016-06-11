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

	JAuth.$inject = ['HelpersService', 'game', '$q', '$mdDialog', '$http', '$timeout'];


	function JAuth (HelpersService, game, $q, $mdDialog, $http, $timeout) {
		var ja = this;

		function getAuth (pass) {
			var def = $q.defer();
			$http({
				method: 'POST',
				url: 'http://localhost:8080/api/auth',
				data: {hash: pass}
			}).success(function (data, status) {
				def.resolve(data);
			}).error(function (data, status) {
				def.resolve(data);
			});
			return def.promise;
		}

		ja.auth = function () {
			var pass = CryptoJS.SHA1(ja.joeyAuth),
				concatPass = '';

			pass.words.forEach(function (item, index) {
				concatPass += item.toString();
			});

			getAuth(concatPass).then(function (result) {
				$mdDialog.hide(result);
			});
		};

		$timeout(function () {
			document.getElementById('the-password').addEventListener('keyup', function(e) {
		    	event.preventDefault();
		    	if (e.keyCode === 13) {
		        	ja.auth();
		    	}
			});
		}, 250);

	}
})();