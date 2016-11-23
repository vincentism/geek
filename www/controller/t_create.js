(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app.create', {
            url: '/create',
            views: {
                'menuContent': {
                    templateUrl: 'templates/t_create.html',
                    controller: 'createController'
                }
            }
        })
    });
    moduleC.controller('createController', function($scope, hideNavBar){
        $scope.hideNavBar = hideNavBar;
    })
})();




// (function(){
//     'use strict';
//
// })();
