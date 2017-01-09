(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
      .state('index.main', {
        url: "/main",
        templateUrl: "app/main/main.html",
        data: { pageTitle: 'Example view' }
      })
      .state('index.queue', {
        url: "/queue",
        templateUrl: "app/queue/queue.html"
      })      



      ;

    $urlRouterProvider.otherwise('/index/main');
  }

})();
