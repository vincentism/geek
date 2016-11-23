moduleC.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.index', {
    url: '/index',
    views: {
      'menuContent': {
        templateUrl: 'templates/t_index.html',
        controller: 'indexCtrl'
      }
    }
  })
});


moduleC.controller('indexCtrl', function($scope, hideNavBar, $ionicNavBarDelegate){
  $scope.hideNavBar = hideNavBar;
  console.log(hideNavBar);
  $ionicNavBarDelegate.showBar(!$scope.hideNavBar);

  // the config of carousel of index
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
