(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('app.register', {
        url: '/register',
        views: {
          'menuContent': {
            templateUrl: 'templates/t_register.html',
            controller: 'registerCtrl'
          }
        }
      })
    });

    moduleC.controller('registerCtrl', function($scope, hideNavBar, $ionicNavBarDelegate){
        $scope.hideNavBar = hideNavBar;
        $scope.registerData = {};
        $scope.doRegister = function(){
            console.log($scope.registerData);
        };

    })
}());
