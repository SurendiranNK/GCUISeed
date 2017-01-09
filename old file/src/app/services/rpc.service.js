'use strict';

angular.module('inspinia.services',[]);

angular.module('inspinia.services')
	.factory('RpcService', function($http,$q) {

		// request id counter
		var requestId = 1;

		// Serivce object definition
		var s = {
			AAAService: {},
			QueueProvService: {}
		};

		/*
		 * Hardcoded test Token for API
		 * It will be replaced with the token from login API and saved in localStorage
		 */

		var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnRJZCI6IjIwMzEiLCJ1c2VySWQiOiIxMDAwIiwiaWF0IjoxNDgzNDY0NDk3LCJleHAiOjE3ODM0NjQ0OTd9.hdicREm5Y8YkeNeW6FcvlQyrmZJo_itOW5PqWIdBj9w"
		var apiUrl = "http://api-gc.anura.com.ar:8090/GCAPI/JSON-RPC"

		/*
         * Private RPC function create API request 
         * API is Implemented as JSON-RPC protocols. http://www.jsonrpc.org/specification
         * Function: rpc()
         * Params:
         *    method: RPC method name
         *    paramrs: Array with function paramenters
         */


		function rpc(method,params) {

			var deferred = $q.defer();

			$http({
				method: 'POST',
				url: apiUrl,
				headers: {
						'Content-Type': 'text/plain',
						'Authorization' : 'Bearer '+token
					},
					data: {id:requestId++,method:method,params:params}
			}).then(function(response) {
				deferred.resolve(response.data);
			}, function(response) {
				deferred.reject(response);
			});

			return deferred.promise;
		}

		s.AAAService.getSessionProfile = function() {
			return rpc("AAAService.getSessionProfile",[]);
		}	

		/**************************************
		 * Queue Provisiong Service functions 
		 * ServiceName: QueueProvService
		 **************************************/

		/*
		 * Function: getQueues()
		 * Params: NONE
		 * Return OK:
		 *	{
		 *	  "id": 3,
		 *	  "result": [
		 *	    {
		 *	      "id": 2,
		 *	      "name": "Cola Soporte"
		 *	    },
		 *	    {
		 *	      "id": 4,
		 *	      "name": "Cola Admin"
		 *	    }
		 *	}
		 *
		 */	


		s.QueueProvService.getQueues = function () {
			return rpc("QueueProvService.getQueues",[]);
		};


		/*****************************************
		 * !!! ADD NEW RPC FUNCTIONs FROM HERE !!!
		 *****************************************/

	return s;
	
	});