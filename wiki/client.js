angular.module('demo',[])
.controller('text', function($scope, $http) {
	var tiempo1 = new Date()
	var m1 = tiempo1.getTime()
	var s;
	$http.get('http://localhost:3000').
	then(function(response) {
		$scope.texto = response.data;
		var tiempo2 = new Date()
		$scope.time = tiempo2.getTime() - m1
		
	});
});