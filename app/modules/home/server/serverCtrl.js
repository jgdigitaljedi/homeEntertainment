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
			response.forEach(function (item, index) {
				var nameProp = item.name.split(' ').join(''),
					temp;
				sc[nameProp] = item;
				if (sc[nameProp].name !== 'CPU Info') sc[nameProp].value.data = item.value.data.replace(/\s+/g, ' ').trim();
				if (sc[nameProp].name === 'Uptime') {
					sc[nameProp].value.data = sc[nameProp].value.data.split(' ')[2].replace(',', '');
				} else if (sc[nameProp].name === 'Disc Space Usage') {
					temp = sc[nameProp].value.data.replace(/\s\s+/g, ' ');
					temp = temp.split(' ');
					var template = '<table class="disc-table"><tr>',
						aLen = temp.length;
					for (var i = 0; i < aLen; i++) {
						if (i < 7) {
							if (i === 6) {
								template += '<th>' + temp[i] + ' ' + temp[i+1] + '</th></tr><tr>';
								i++;
							} else {
								template += '<th>' + temp[i] + '</th>';
							}
						} else if (i + 1 === aLen) {
							template += '<td>' + temp[i] + '</td>';
							if ((i) % 7 === 0) template += '</tr></table>';
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
					sc.usedPercent = parseFloat((sc.usedRam / sc.totalRam * 100).toFixed(2));

				} else if (sc[nameProp].name === 'Linux Distribution') {
					temp = sc[nameProp].value.data.split(' ');
					temp[1] = temp[0] + ' ' + temp[1];
					temp.splice(0, 1);
					var sub = ':',
						tLen = temp.length,
						newArr = [temp[0] + ' ' + temp[1]],
						counter = 0;
					for (var j = 2; j < tLen; j++) {
						if (temp[j].indexOf(sub) > -1) {
							newArr[counter] = newArr[counter].trim();
							counter++;
							newArr[counter] = ' ';
						}
						newArr[counter] += ' ' + temp[j];
					}
					sc.distInfoArr = newArr;
				} else if (sc[nameProp].name === 'CPU Info') {
					temp = sc[nameProp].value.data.replace(/(?:(?![A-Za-z0-9:(),_ -]))/g, ':');
					temp = temp.replace(/\s+/g, ' ').trim().split(':');
					var cpuTemplate = '<table class="disc-table"><tr>',
						otherCpuTemplate = '<table class="disc-table"><tr>',
						tempArr = [cpuTemplate, otherCpuTemplate],
						tracker = 0,
						tbLen = temp.length;
					temp.forEach(function (item, index) {
						if (index % 2 === 0) {
							tempArr[tracker] += '</tr><tr>';
							tracker = tracker === 0 ? 1 : 0;
						}
						if (index + 1 === tbLen) tempArr[tracker] = tempArr[tracker].slice(0, -8);
						tempArr[tracker] += '<td>' + item + '</td>';
					});
					cpuTemplate = $compile(tempArr[0])(sc);
					otherCpuTemplate = $compile(tempArr[1])(sc);
					angular.element(document.querySelector('#cpu-template')).append(cpuTemplate);
					angular.element(document.querySelector('#other-cpu-template')).append(otherCpuTemplate);
				}
			});
		});
	}
})();