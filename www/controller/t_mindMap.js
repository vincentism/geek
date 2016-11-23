moduleC.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.mindMap', {
    url: '/mindmap',
    views: {
      'menuContent': {
        templateUrl: 'templates/t_mindMap.html',
        controller: 'mindCtrl'
      }
    }
  })
});
moduleC.controller('mindCtrl', function($scope, hideNavBar){
    $scope.hideNavBar = hideNavBar;
    $scope.testData = 'vincent';
})
