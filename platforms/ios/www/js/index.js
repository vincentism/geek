moduleC.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.index', {
    url: '/index',
    views: {
      'menuContent': {
        templateUrl: 'templates/index.html',
        controller: 'slideCtrl'
      }
    }
  })
});
moduleC.controller('slideCtrl', function($scope){
  $scope.hideNavBar = false;
  $scope.options = {
      loop: true,
      effect: 'slide',
      speed: 500,
  }

  $scope.IsPC = function(){
      var userAgentInfo = navigator.userAgent;
      var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
      }
      return flag;
  }
  if($scope.IsPC()){
      $scope.hideNavBar = true;
  } else {
      $scope.hideNavBar = false;
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
