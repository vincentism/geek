moduleC.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.console', {
    url: '/console',
    views: {
      'menuContent': {
        templateUrl: 'templates/console.html',
        controller: 'consoleCtrl'
      }
    }
  })
});
moduleC.controller('consoleCtrl', function($scope, hideNavBar){
    $scope.hideNavBar = hideNavBar;
    $scope.testData = 'vincent';
})
