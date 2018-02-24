'use strict';

/**
 * GIPY Search App
 * Created By Meagan Sievers
 */
angular
  .module('giphySearchApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .directive('search', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/search.html',
            controller: 'SearchCtrl'
        };
});
