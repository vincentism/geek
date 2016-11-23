(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'accountCtrl'
      })
    });

    moduleC.controller('accountCtrl', function($scope, $ionicModal, $http, $timeout) {
      // Form data for the register modal
      $scope.registerData = {};
      $scope.loginData = {};

      // Create the register modal that we will use later
      $ionicModal.fromTemplateUrl('templates/register.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal1 = modal;
      });

      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal2 = modal;
      });

      // Triggered in the register modal to close it
      $scope.closeRegister = function() {
        $scope.modal1.hide();
      };

      $scope.closeLogin = function() {
        $scope.modal2.hide();
      };

      // Open the register modal
      $scope.register = function() {
        $scope.modal1.show();
      };

      $scope.login = function() {
        $scope.modal2.show();
      };

      $scope.doLogin = function() {
        console.log('Doing Login', $scope.loginData);
        $http.get('fake/login.json').success(function(response){
            console.log(response);
            $scope.name = response.data.name;
            window.location.href="#/app/console";
        });
        // Simulate a register delay. Remove this and replace with your register
        // code if using a register system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };

      // Perform the register action when the user submits the register form
      $scope.doRegister = function() {
        console.log('Doing register', $scope.registerData);

        // Simulate a register delay. Remove this and replace with your register
        // code if using a register system
        $timeout(function() {
          $scope.closeRegister();
        }, 1000);
      };

      $scope.$on('$destroy', function() {
        $scope.modal1.remove();
        $scope.modal2.remove();
      });
      // 当隐藏的模型时执行动作
      $scope.$on('modal.hide', function() {
        // 执行动作
      });
      // 当移动模型时执行动作
      $scope.$on('modal.removed', function() {
        // 执行动作
      });

    })
}());
