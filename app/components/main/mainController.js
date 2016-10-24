theatreSite.controller('mainController', 
	['$scope','$http',function($scope, $http) {
	
    $http.get("app/components/main/posters.json").then(function(response) {
    	
      $scope.posters = response.data.posters;
    
    });	
}]);


