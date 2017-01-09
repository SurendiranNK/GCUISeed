'use strict';

angular.module('inspinia')
  .controller('MainController', function (RpcService,$log) {

    var vm = this;

    vm.userName = 'Juan Perez';
    vm.tenantName = "Example Company";
    vm.credit = 0;

	RpcService.AAAService.getSessionProfile().then(function(response) {
		if(response.result) {
			vm.userName = response.result.user.name;
			vm.tenantName = response.result.tenant.name;
			vm.credit = response.result.credit.amount;
		}
	}, function(response) {
		$log.log("load(): error: "+response);  
	});

    vm.helloText = 'Welcome in INSPINIA Gulp SeedProject for Anura Control Panel Seed';
    vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

  });
