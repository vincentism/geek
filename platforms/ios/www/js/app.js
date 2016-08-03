// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
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
})

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.templates.maxPrefetch(0);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.console', {
    url: '/console',
    views: {
      'menuContent': {
        templateUrl: 'templates/console.html',
        controller: 'consoleCtrl'
      }
    }
  })
  .state('app.team', {
    url: '/team',
    views: {
      'menuContent': {
        templateUrl: 'templates/team.html',
        controller: 'teamCtrl'
      }
    }
  })
  .state('app.leanCanvas', {
      url: '/leancanvas',
      views: {
        'menuContent': {
          templateUrl: 'templates/leanCanvas.html'
        }
      }
    })
    .state('app.create', {
        url: '/create',
        views: {
          'menuContent': {
            templateUrl: 'templates/create.html'
          }
        }
      })
    .state('app.index', {
      url: '/index',
      views: {
        'menuContent': {
          templateUrl: 'templates/index.html',
          controller: 'slideCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/index/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/index');
});
