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
    moduleC.controller('createController', function($scope, $ionicNavBarDelegate, $rootScope){
        $ionicNavBarDelegate.showBar(!$rootScope.globals.hideNavBar);
    })
})();




// (function(){
//     'use strict';
//
// })();
