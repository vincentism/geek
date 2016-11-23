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
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal2.hide();
  };

  // Triggered in the register modal to close it
  $scope.closeRegister = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal2.show();
  };

  // Open the register modal
  $scope.register = function() {
    $scope.modal.show();
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
})
