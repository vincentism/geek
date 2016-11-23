(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.console', {
                url: '/console',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/t_console.html',
                        controller: 'consoleCtrl'
                    }
                }
            })
        });
    moduleC.controller('consoleCtrl', function($scope, hideNavBar){
        $scope.hideNavBar = hideNavBar;
        $scope.testData = 'vincent';
    })
})();
