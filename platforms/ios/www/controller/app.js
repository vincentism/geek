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

// the hideNavBar service, return boolean based on UA
// moduleS.factory('hideNavBar', function(){
//     var hideNavBar = false;
//     var IsPC = function(){
//         var userAgentInfo = navigator.userAgent;
//         var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
//         var flag = true;
//         for (var v = 0; v < Agents.length; v++) {
//             if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
//         }
//         return flag;
//     }
//     // if(IsPC()){
//     //     hideNavBar = true;
//     // } else {
//     //     hideNavBar = false;
//     // }
//     hideNavBar = (IsPC() ? true : false)
//     return hideNavBar;
// })
