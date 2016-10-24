var theatreSite = angular.module('theatreSite', [  
    'ngRoute',
    'ngStorage',
    'ngSanitize'
    
  ])
.config(function($routeProvider){
        
        $routeProvider.when('/main',
        {
            templateUrl:'app/components/main/mainView.html',
            controller:'mainController'
        });

        $routeProvider.when('/about',
        {
            templateUrl:'views/about.html',
            // controller:'troupeController'
        });
       
        $routeProvider.when('/producer',
        {
            templateUrl:'app/components/producer/producerView.html',
            controller:'producerController'
        });
		$routeProvider.when('/troupe',
        {
            templateUrl:'app/components/troupe/troupeView.html',
            controller:'troupeController'
        });
		$routeProvider.when('/plays',
        {
            templateUrl:'views/plays.html',
            // controller:'myRecipesController'
        });
        $routeProvider.when('/photos',
        {
            templateUrl:'app/components/photos/views/photosView.html',
            controller:'photosController'
        });
        $routeProvider.when('/photos/:orderId',
        {
            templateUrl:'app/components/photos/views/photosItemView.html',
            controller:'photosItemController'
        });
        $routeProvider.when('/news',
        {
            templateUrl:'app/components/news/newsView.html',
            controller:'newsController'
        });
        $routeProvider.when('/contacts',
        {
            templateUrl:'app/components/contacts/contactsView.html',
            controller:'contactsController'
        });
        $routeProvider.otherwise({redirectTo: '/main'});
    });
