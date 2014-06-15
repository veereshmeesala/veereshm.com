'use strict';

var profileApp = angular.module('profileApp', ['ngRoute', 'ngResource']);

profileApp.config(['$routeProvider', '$stateProvider', function($routeProvider, $stateProvider){

	// Define a top-level state:
	$stateProvider.state('sampleworks', {
  			url: '/sampleworks',
  			controller: 'sampleworksCtrl',
  			templateUrl: 'sampleworks/index.html'
	});

	// Define a child state for 'users':
	$stateProvider.state('sampleworks.jqueryexamples', {
	  url: '/jqueryexamples',
	  templateUrl: 'sampleworks/templates/jqueryworks.html'
	});

	$routeProvider.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	}).when('/aboutme', {
		templateUrl: 'templates/aboutme.html',
		controller: 'aboutmeCtrl'
	}).when('/portfolio', {
		templateUrl: 'templates/portfolio.html',
		controller: 'portfolioCtrl'
	}).otherwise({
		redirectTo: '/home'
	});

	
}]);

// profileApp.directive('a', function() {
//     return {
//         restrict: 'E',
//         link: function(scope, elem, attrs) {
//             if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
//                 elem.on('click', function(e){
//                 	console.log('working');
//                     e.preventDefault();
//                     if(attrs.ngClick){
//                         scope.$eval(attrs.ngClick);
//                     }
//                 });
//             }
//         }
//    };
// });


// profileApp.directive('eatClick', function() {
//     return function(scope, element, attrs) {
//         $(element).click(function(event) {
//         	console.log('working');
//             event.preventDefault();
//         });
//     }
// })