(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:ServerService
	* @description service to get server info
	* # ServerService
	* server info logic
	*/

	angular
		.module('home-control')
		.factory('ServerService', Server);

	Server.$inject = ['$q', '$http'];

	function Server ($q, $http) {

		function getServerInfo () {
			var promises = [];
			var serverInfo = [
				{name: 'Node Version',command: 'node --version', value: null},
				// {name: 'Python Version', command: 'python --version', value: null},
				{name: 'NPM Version', command: 'npm --version', value: null},
				{name: 'Git Version', command: 'git --version', value: null},
				{name: 'Uptime', command: 'uptime', value: null},
				{name: 'Disc Space Usage', command: 'df -h -T', value: null},
				{name: 'RAM Usage', command: 'free -m', value: null},
				{name: 'Linux Distribution', command: 'lsb_release -a', value: null},
				{name: 'Kernel', command: 'uname -r', value: null},
				{name: 'CPU Info', command: 'lscpu', value: null},
				{name: 'Updates Available', command: '---usr---lib---update-notifier---apt-check --human-readable', value: null}
			];

			serverInfo.forEach(function (item, index) {
				var def = $q.defer();
				$http.get('http://localhost:8080/api/serverInfo/' + item.command).then(function (response) {
					item.value = response;
					def.resolve(item);
				});
				promises.push(def.promise);
			});

			return $q.all(promises);
		}

		return {
			getServerInfo: getServerInfo
		};
	}
})();