angular.module('demo',[])
.controller('text', function($scope, $http) {
	$http.get('http://localhost:3000').
	then(function(response) {
		$scope.texto = response.data;
	});
});