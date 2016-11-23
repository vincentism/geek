(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app.practice', {
            url: '/practice',
            views: {
                'menuContent': {
                    templateUrl: 'templates/vincent_practice.html',
                    controller: 'scopeController'
                }
            }
        })
    });
    // moduleI.directive('myDirective', function(){
    //     return {
    //         restrict: 'A',
    //         replace: true,
    //         scope: {
    //             myUrl: '=someAttr',
    //             myLinkText: '@'
    //         },
    //         template: '<div><label>My Url Field:</label><input type="text" ng-model="myUrl" /><a href="{{myUrl}}">{{myLinkText}}</a></div>'
    //     };
    // });
    // moduleC.controller('practiceController', function($scope){
    //     $scope.data = 'vincent';
    //
    // })
    moduleI.controller('scopeController', function($scope){

    }).directive('myDirective', function(){
        return {
            restrict: 'A',
            scope: {},
            priority: 100,
            template: '<div>ins: {{myProperty}}</div>'
        }
    });
})();
