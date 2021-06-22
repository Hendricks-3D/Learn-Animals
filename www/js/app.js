// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform,$rootScope, $ionicLoading) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

	  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
        
        StatusBar.styleDefault();
    }
	  
  });
	
//=======================ALLOW LOADING ON START UP AND STATES===========	
 $rootScope.$on('loading:show', function () {
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner> Loading ...'
        })
    });

    $rootScope.$on('loading:hide', function () {
        $ionicLoading.hide();
    });

	//DISPLAY LOADING WHEN THE APP STATE CHANGE
    $rootScope.$on('$stateChangeStart', function () {
        console.log('Loading ...');
        $rootScope.$broadcast('loading:show');
    });

	//REMOVE LOADING WHEN APP STATE CHANGE IS SUCCESSFUL
    $rootScope.$on('$stateChangeSuccess', function () {
        console.log('done');
        $rootScope.$broadcast('loading:hide');
    });	
//========================================================================	
	
})





.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.birds', {
    url: '/birds',
    views: {
      'menuContent': {
        templateUrl: 'templates/birds.html'
      }
    }
  })

  .state('app.mammals', {
      url: '/mammals',
      views: {
        'menuContent': {
          templateUrl: 'templates/mammals.html'
        }
      }
    })
  
  .state('app.aboutus', {
      url: '/aboutus',
      views: {
        'menuContent': {
          templateUrl: 'templates/aboutus.html'
        }
      }
    })
  
      .state('app.contactus', {
      url: '/contactus',
      views: {
        'menuContent': {
          templateUrl: 'templates/contactus.html'
        }
      }
    })
  
  
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
