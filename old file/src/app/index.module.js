(function() {
	'use strict';

	angular
		.module('inspinia', [
			'ngAnimate', 
			'ngCookies', 
			'ngTouch', 
			'ngSanitize', 
			'ngMessages', 
			'ngAria', 
			'ngResource', 
			'ui.router', 
			'ui.bootstrap',
			'pascalprecht.translate',	// Angular Translate

			'inspinia.services'

	]);
})();
