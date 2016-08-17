moduleC.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.header', {
    url: '/header',
    views: {
      'menuContent': {
        templateUrl: 'templates/header.html',
        controller: 'headerCtrl'
      }
    }
  })
});
moduleC.controller('headerCtrl', function($scope){
    $scope.test = 'test'
})
