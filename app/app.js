var myapp = angular.module('MyApp', []);

myapp.filter('reverse', [function(){
	return function(string){
		return string.split('').reverse().join('');
	}
}]);
myapp.controller('Calculate', function($scope){
	$scope.add = function(){
		$scope.sum = $scope.num1 + $scope.num2;
;	}
});

// myapp.factory('PlayerAPI', function(){
// 	var data = [{
// 		"ID":"1",
// 		"Name":"Harkirat",
// 		"Age" : 30
// 	}];
// 	var PlayerAPI = {};
// 	PlayerAPI.getPlayers = function(){
// 		return data;
// 	}
// 	return PlayerAPI;
// })

myapp.factory('PlayerAPI', function($http){
	var urlBase = "http://localhost:61409/api";
	var PlayerApi = {};
	PlayerApi.getPlayers = function(){
		return $http.get(urlBase +'/Players');
	}
	return PlayerApi;
});