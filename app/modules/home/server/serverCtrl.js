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

	Server.$inject = ['ServerService', '$compile'];

	function Server(ServerService, $compile) {
		var sc = this;

		ServerService.getServerInfo().then(function (response) {
			console.log('response', response);
			response.forEach(function (item, index) {
				var nameProp = item.name.split(' ').join(''),
					temp;
				sc[nameProp] = item;
				sc[nameProp].value.data = item.value.data.replace(/\s+/g, ' ').trim();
				if (sc[nameProp].name === 'Uptime') {
					sc[nameProp].value.data = sc[nameProp].value.data.split(' ')[2].replace(',', '');
				} else if (sc[nameProp].name === 'Disc Space Usage') {
					temp = sc[nameProp].value.data.replace(/\s\s+/g, ' ');
					temp = temp.split(' ');
					var template = '<table><tr>',
						aLen = temp.length;
					for (var i = 0; i < aLen; i++) {
						if (i < 7) {
							if (i === 6) {
								template += '<th>' + temp[i] + ' ' + temp[i+1] + '</th></tr><tr>';
								i++;
							} else {
								template += '<th>' + temp[i] + '</th>';
							}
						} else {
							template += '<td>' + temp[i] + '</td>';
							if ((i) % 7 === 0) template += '</tr><tr>';
						}
					}
					template = $compile(template)(sc);
					angular.element(document.querySelector('#disc-usage-template')).append(template);
				} else if (sc[nameProp].name === 'RAM Usage') {
					temp = sc[nameProp].value.data.split(' ');
					sc.totalRam = parseInt(temp[7]);
					sc.usedRam = parseInt(temp[8]);
					sc.freeRam = parseInt(temp[9]);
					console.log('sc.totalRam', sc.totalRam);
					console.log('sc.usedRam', sc.usedRam);
					console.log('sc.freeRam', sc.freeRam);
					sc.usedPercent = parseFloat((sc.usedRam / sc.totalRam * 100).toFixed(2));
					console.log('sc.usedPercent', sc.usedPercent);

				}
				console.log('this thing', sc[nameProp]);
			});
		});
	}
})();