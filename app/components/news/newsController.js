theatreSite.controller('newsController', 
	['$scope','$http',function($scope, $http) {
	
    $http.get("app/components/news/news.json").then(function(response) {
    	
      $scope.news = response.data.news;
      

      $scope.items = [];
   var h = $(document).height();
        var r = h - 120;
        console.log(r);
        var n = Math.round(r / 140) ;
console.log(n);
      var counter = 0;
      $scope.loadMore = function(n) {
        for (var i = 0; i < n; i++) {
            $scope.items.push($scope.news[i]);
        }
      };
      $scope.loadMore(n);
      $scope.loadMoreAdd = function() {
         console.log(n); 
            $scope.items.push($scope.news[n+1]);
        
      };

 console.log($scope.items); 
    $(window).scroll(function() {
     console.log($(window).scrollTop());
     console.log($(window).height());
      if ($(window).scrollTop() == 28) {
      // $scope.items = [];
      // console.log("test");
$scope.loadMoreAdd();
console.log($scope.items);
$scope.$apply();
}
if ($(window).scrollTop() == 183) {
      // $scope.items = [];
      // console.log("test");
$scope.loadMoreAdd();
console.log($scope.items);
$scope.$apply();
}
        });
      

    });	
}]);