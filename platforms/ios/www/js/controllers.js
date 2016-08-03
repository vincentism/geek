angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the register modal
  $scope.registerData = {};

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
    window.location.href="#/app/console";
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

.controller('PlaylistsCtrl', function($scope) {
  $scope.index = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('slideCtrl', function($scope){
  $scope.options = {
    loop: true,
    effect: 'slide',
    speed: 500,
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
    // note: the indexes are 0-based
    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });

})

.controller('teamCtrl', function($scope){
    $scope.testData = 'vincent';
})
.controller('consoleCtrl', function($scope){
    $scope.testData = 'vincent';
})
