moduleC.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.leanCanvas', {
      url: '/leancanvas',
      views: {
          'menuContent': {
              templateUrl: 'templates/leanCanvas.html',
              controller: 'leanCtrl'
          }
      }
  });
});

moduleC.controller('leanCtrl', function($scope){
    $scope.testData = 'vincent';
})
