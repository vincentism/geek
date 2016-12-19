(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('app.teamboardtemp', {
        url: '/teamboardtemp',
        views: {
          'menuContent': {
            templateUrl: 'templates/t_teamboardtemp.html',
            controller: 'teamboardtempCtrl'
          }
        }
      })
    });

    moduleC.controller('teamboardtempCtrl', function($scope, $rootScope, $ionicNavBarDelegate){
        // $ionicNavBarDelegate.showBar(!$rootScope.globals.hideNavBar);
    })
}());
