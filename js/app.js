var form = angular.module('inputdata', []);
var datas = [];

form.controller('formCtrl', function($scope){
	$scope.data = {};
	$scope.datas = [];
	$scope.save = function(){
		
		
		console.log($scope.data);
		
		$scope.datas.push($scope.data);
		console.log($scope.datas);
		$scope.bersih();
	}
	
	$scope.bersih = function(){
		$scope.data = {
			id : "",
			nama : "",
			alamat : ""
		}
	}
	
	$scope.hapus = function($data){
		var index = $scope.datas.indexOf($data);
		
		if(index > -1){
			$scope.datas.splice(index, 1);
		}
	}
	
	
	
});