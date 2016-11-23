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

    moduleC.controller('LoginController', LoginController);
    LoginController.$inject('$location', '$scope', 'hideNavBar', '$ionicNavBarDelegate', 'AuthenticationService');
    function LoginController($location, $scope, hideNavBar, $ionicNavBarDelegate, AuthenticationService){
        $scope.hideNavBar = hideNavBar;
        $scope.loginData = {};
        $scope.login = login;
        function login(){
            console.log($scope.loginData);
            AuthenticationService.Login($scope.loginData, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.loginData);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }
}());
