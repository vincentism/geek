// Ionic Starter App
var moduleC = angular.module('starter.controllers', ['ui.router']);
var moduleS = angular.module('starter.services', []);
var moduleI = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

moduleI.run(function($ionicPlatform) {
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
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/index');
});
