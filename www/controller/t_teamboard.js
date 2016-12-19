(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('app.teamboard', {
        url: '/teamboard',
        views: {
          'menuContent': {
            templateUrl: 'templates/t_teamboard.html',
            controller: 'teamboardCtrl'
          }
        }
      })
    });

    moduleC.controller('teamboardCtrl', function($scope, $rootScope, $ionicNavBarDelegate){
        $ionicNavBarDelegate.showBar(!$rootScope.globals.hideNavBar);
    })
}());
