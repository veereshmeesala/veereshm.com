'use strict';
profileApp.controller('portfolioCtrl', function portfolioCtrl($scope, deloitteExp, ivyExp){
		$scope.message = 'portfolio page';
		$scope.projects = deloitteExp.items;
		$scope.ivyProjects = ivyExp.items;
		$scope.layout = 'list';
});
