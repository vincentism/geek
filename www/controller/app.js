// Ionic Starter App
var moduleC = angular.module('starter.controllers', ['ui.router', 'dndLists']);
var moduleS = angular.module('starter.services', []);
var moduleI = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'LocalStorageModule']);
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

moduleI.run(function($ionicPlatform, $rootScope, localStorageService) {
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

      if(localStorageService.get('globals')){
          $rootScope.globals =  localStorageService.get('globals');
      }

    });
})

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.templates.maxPrefetch(0);
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, localStorageServiceProvider) {
  $stateProvider
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/index');
  // get rid of the animation effect when page changes
  $ionicConfigProvider.views.transition('none');
  // local-storage-configration
  localStorageServiceProvider.setPrefix('yidaoyun');

})

// run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
// function
.run(function($rootScope, $location, $http, hideNavBar, localStorageService){
    $rootScope.globals = {
        hideNavBar : hideNavBar
    }

    // localStorageService.set('globals', $rootScope.globals);
    // keep user logged in after page refresh
    $rootScope.user = localStorageService.get('user') || {};
    console.log($rootScope.globals.hideNavBar);


    if ($rootScope.user) {
        // $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.user.authdata; // jshint ignore:line
    }
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        // var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        // var loggedIn = $rootScope.globals.user;
        // if (!loggedIn) {
        //     $location.path('/app/login');
        // }
    });
    // $rootScope.$on('$routeChangeSuccess', function (){
    //     $rootScope.globals = localStorageService.get('globals') || {};
    // });
});
