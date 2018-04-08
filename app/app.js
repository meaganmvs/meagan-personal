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
        templateUrl: 'views/meagan.html'
      })
     .when('/gifs', {
        templateUrl: 'views/search.html'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html'
    })
      .otherwise({
        redirectTo: '/'
      });
  })
.directive('meagan', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/meagan.html'
        }
    });
