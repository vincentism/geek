(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('app.team', {
        url: '/team',
        views: {
          'menuContent': {
            templateUrl: 'templates/t_team.html',
            controller: 'teamCtrl'
          }
        }
      })
    });

    moduleC.controller('teamCtrl', function($scope, hideNavBar, $ionicNavBarDelegate){
        $scope.hideNavBar = hideNavBar;
        console.log($scope.hideNavBar);
        // $ionicNavBarDelegate.showBar(!$scope.hideNavBar);

    })
}());
