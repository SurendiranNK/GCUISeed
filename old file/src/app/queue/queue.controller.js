'use strict';

angular.module('inspinia')
  .controller('QueueController', function (RpcService,$log) {

    var vm = this;

    vm.queues = [];

    RpcService.QueueProvService.getQueues().then(function(response) {
			vm.queues = response.result;
		}, function(response) {
			$log.log("load(): error: "+response);  
		});

  });
