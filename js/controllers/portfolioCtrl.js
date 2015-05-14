'use strict';
profileApp.controller('portfolioCtrl', function portfolioCtrl($scope, deloitteExp, ivyExp, globalRadioExp){
		$scope.message = 'portfolio page';
		$scope.globalRadioProjects = globalRadioExp.items;
		$scope.projects = deloitteExp.items;
		$scope.ivyProjects = ivyExp.items;
		$scope.layout = 'list';
});
