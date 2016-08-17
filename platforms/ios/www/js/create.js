moduleC.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.create', {
      url: '/create',
      views: {
        'menuContent': {
          templateUrl: 'templates/create.html'
        }
      }
    })
});
