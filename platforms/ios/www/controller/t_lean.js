(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app.leanCanvas', {
            url: '/leancanvas',
            views: {
                'menuContent': {
                    templateUrl: 'templates/t_leanCanvas.html',
                    controller: 'leanCtrl'
                }
            }
        });
    });
    moduleC.controller('leanCtrl', function($scope){
        $scope.testData = 'vincent';
    })
})();
