describe('App Tests', function(){
	beforeEach(module('MyApp'));

	describe('reversestring', function(){
		var reverse;
		beforeEach(inject(function($filter){
			reverse = $filter('reverse', {});
		}));
		it('should revese a string', function(){
			expect(reverse('jd')).toBe('dj');
			expect(reverse('kaka')).toBe('akak');
		});
	});
	describe('add controller',function() {
		var $controller;
		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
		}));
		it('should 1+1 equal 2', function(){
			var $scope ={};
			var controller = $controller('Calculate', {$scope: $scope});
			$scope.num1=1;
			$scope.num2=2;
			$scope.add();
			expect($scope.sum).toBe(3);
		});
	});
	// describe('service PlayerAPI', function(){
	// 	var data = [{
	// 	"ID":"1",
	// 	"Name":"Harkirat",
	// 	"Age" : 30
	// }];
	// 	var PlayerAPI = {};
	// 	beforeEach(inject(function(_PlayerAPI_){
	// 		PlayerAPI = _PlayerAPI_;
	// 	}));
	// 	it('should return search player data', function(){
	// 		expect(PlayerAPI.getPlayers()).toEqual(data);
	// 	})
	// });

	describe('service PlayerAPI', function(){
		var PlayerAPI, httpBackend;
		beforeEach(inject(function($httpBackend, _PlayerAPI_){
			PlayerAPI = _PlayerAPI_;
			httpBackend = $httpBackend;
		}));
		it('ServiceTest', function(){
			var returnData ={};
			httpBackend.expectGET("API").respond(returnData);
			var returnpromise = PlayerAPI.getPlayers();
			var result;
			returnpromise.then(function(response){
				result = response.data;
			});
			httpBackend.flush();
			expect(result).toEqual(returnData);
		})
	})
});