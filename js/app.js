'use strict';

var profileApp = angular.module('profileApp', ['ngRoute', 'ngResource', 'ngAnimate']);

profileApp.config(['$routeProvider', function($routeProvider){



	$routeProvider.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	}).when('/aboutme', {
	    templateUrl: 'templates/aboutme-test.html',
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


// profileApp.directive('animClass',function($route){
//   return {
//     link: function(scope, elm, attrs){
//       var enterClass = $route.current.animate;
//       elm.addClass(enterClass);
//       scope.$on('$destroy',function(){
//         elm.removeClass(enterClass);
//         elm.addClass($route.current.animate);
//       })
//     }
//   }
// });