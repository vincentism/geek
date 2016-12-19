(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/t_login.html',
            controller: 'LoginController'
          }
        }
      })
    });

    moduleC.controller('LoginController', function($location, $scope, $rootScope, $ionicNavBarDelegate, AuthenticationService, localStorageService){
        $ionicNavBarDelegate.showBar(!$rootScope.globals.hideNavBar);
        $scope.userData = {};
        $scope.login = login;
        function login(){
            AuthenticationService.Login($scope.userData, function (response) {
  //                 if (response.success) {
  //                     AuthenticationService.SetCredentials($scope.userData);
  //                     $location.path('/');
  //                 } else {
  //                     $rootScope.user = 'Testing';
  //                     $location.path('/'); // for testing
  // //                     FlashService.Error(response.message);
  // //                     vm.dataLoading = false;
  //                 }
                  $rootScope.user = 'retesting';
                  localStorageService.set('user', 'retesting');
                  $location.path('/');
              });
        };

    });
}());
