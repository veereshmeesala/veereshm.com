'use strict';

// profileApp.controller('homeCtrl', function homeCtrl($scope){
// 	$scope.greeting = 'Hola!';
// 	console.log('home controller');
// });



profileApp.controller('homeCtrl', ['$scope', 'bannerInfo', 
	function homeCtrl($scope, bannerInfo) {
  // $scope.phones = 'homeCtrl';
  
  //$scope.slides = deloitteExp.items;
  $scope.slides = bannerInfo.items;
}]);