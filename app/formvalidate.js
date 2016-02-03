'use strict';

// Declare app level module which depends on views, and components
var formvalidate = angular.module('formvalidate', [
	'ngRoute',
	'jcs-autoValidate',
	'angular-ladda'
]);

formvalidate.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

formvalidate.run(function(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
		errorMessages['tooYoung'] = "You must be at least {0} years old to use this site";
		errorMessages['tooOld'] = "You must be younger than {0} years old to use this site";
		errorMessages['invalidUsername'] = "Username can only contain characters, numbers and '_'";
	});
});

formvalidate.controller('FormValidateCtrl', function($scope, $http){
	$scope.formModel = {};
	$scope.submitting = false;
	$scope.onSubmit = function () {
		console.log('Hey, I am submitted.');

		$scope.submitting = true;
		var url = "https://minmax-server.herokuapp.com/register/";
		console.log($scope.formModel);
		$http.post(url, $scope.formModel)
			.success(function(data){
				console.log(data);
				console.log(":)");
				$scope.submitting = false;
			})
			.error(function(err){
				console.log(":(");
				$scope.submitting = false;
			})
		;
	};
});
