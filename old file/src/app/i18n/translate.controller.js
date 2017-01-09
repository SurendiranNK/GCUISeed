/**
 * translateCtrl - Controller for translate
 */
 'use strict';

angular
	.module('inspinia')
	.controller('TranslateController', function ($translate) {
		var vm = this;

		vm.lang = 'es';

		vm.changeLanguage = function (langKey) {
			$translate.use(langKey);
			vm.lang = langKey;
		};

		vm.getFlag = function() {
            switch (vm.lang) {
                case 'en':
                    return 'United-States.png';
                case 'es':
                    return 'Argentina.png';
            }
        };
})
