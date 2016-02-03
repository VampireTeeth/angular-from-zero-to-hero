'use strict';

// Declare app level module which depends on views, and components
var minmax = angular.module('minmax', [
	'ngRoute',
]);

minmax.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

minmax.controller('MinMaxCtrl', function($scope, $http){
	$scope.formModel = {};
	$scope.onSubmit = function () {
		console.log('Hey, I am submitted.');
		var url = "https://minmax-server.herokuapp.com/register/";
		$http.post(url, $scope.formModel)
			.success(function(data){
				console.log(data);
				console.log(":)");
			})
			.error(function(err){
				console.log(":(");
			})
		;
	};
});
