theatreSite.controller('troupeController', 
	['$scope','$http',function($scope, $http) {
	
    $http.get("app/components/troupe/troupe.json").then(function(response) {
    	
      $scope.troupe = response.data.troupe;

    });	
   
}]);


