(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('app.panel', {
        url: '/panel',
        views: {
          'menuContent': {
            templateUrl: 'templates/t_panel.html',
            controller: 'panelController'
          }
        }
      })
    });

    moduleC.controller('panelController', function($scope){
      $scope.models = {
          selected: null,
          lists: {"A": [], "B": []}
      };

      // Generate initial model
      for (var i = 1; i <= 3; ++i) {
          $scope.models.lists.A.push({label: "Item A" + i});
          $scope.models.lists.B.push({label: "Item B" + i});
      }

      // Model to JSON for demo purpose
      $scope.$watch('models', function(model) {
          $scope.modelAsJson = angular.toJson(model, true);
      }, true);
    });

    // moduleC.component('testComponent', {
    //     template: '<div> this is testComponent</div>'
    // });
    //
    // moduleC.component('dragAndDropExample', {
    //     template: `<ul ng-sortable=$ctrl.sortableConf>
    //         <li ng-repeat="item in ['burgers', 'chips', 'hotdog']">
    //             {$ item $}
    //         </li>
    //     </ul>`,
    //     controller: function AppSidebarController() {
    //     var ctrl = this;
    //         ctrl.sortableConf = {
    //                 animation: 350,
    //                 chosenClass: 'sortable-chosen',
    //                 forceFallback: true,
    //         };
    //     },
    // })
}());
