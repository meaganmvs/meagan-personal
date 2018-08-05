'use strict';

/**
 * GIPY Search App
 * Created By Meagan Sievers
 */
angular
  .module('meaganApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $locationProvider) {
    
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
    .when('/photos', {
        templateUrl: 'views/photos.html'
    })
      .otherwise({
        redirectTo: '/'
      });
     $locationProvider.html5Mode(true);
  })
.directive('meagan', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/meagan.html'
        }
    });



