'use strict';

profileApp.controller('navCtrl', function navCtrl($scope, $location){
	//$scope.phone = {};
	$scope.$location = $location;
	$scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };  

    // $scope.gotoAboutme = function(){
    // 	console.log('working');
    // 	$location.path('/aboutme');
    // };

    $scope.go = function (path) {
    	// console.log(path);
  		$location.path(path);
	};
});