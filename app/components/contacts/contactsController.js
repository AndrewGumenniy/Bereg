theatreSite.controller('contactsController', 
	['$scope','$http','$timeout',function($scope, $http,$timeout) {

	 $scope.appLoaded = false;    
   

    $timeout(function() { $scope.appLoaded = true; }, 1000);
	
}]);



