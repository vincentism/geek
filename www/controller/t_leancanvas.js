(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app.leanCanvas', {
            url: '/leancanvas',
            views: {
                'menuContent': {
                    templateUrl: 'templates/t_leancanvas.html',
                    controller: 'leanController'
                }
            }
        });
    });

    moduleC.directive('leanCanvasBox', function(){
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                title: '@title',
                placeholder: '@placeholder',
                content: '=content'
            },
            template: '<div class="sarking" ng-mouseover="showCommentBtn()" ng-mouseleave="hideCommentBtn()">'
                + '<div class="lean-canvas-title">{{title}}</div>'
                + '<textarea ng-model="content" ng-blur="toLocationStart()" class="lean-canvas-textarea" placeholder="{{placeholder}}"></textarea>'
                + '<div class="lean-canvas-btns" id="lean-comment-problem" ng-show="showBox">'
                    + '<button class="lean-canvas-btn lean-canvas-btn-comment" ng-click="toComment()">评论</button>'
                + '</div>'
                + '</div>',
            link: function(scope, element, attrs){
                scope.showBox = false;
                scope.showCommentBtn = function(){
                    scope.showBox = true;
                };
                scope.hideCommentBtn = function(){
                    scope.showBox = false;
                };
                scope.toComment = function() {
                    alert(scope.content);
                };
                scope.toLocationStart = function(){
                    // scope.content = scope.content;
                }

            }

        }
    });


    moduleC.controller('leanController', function($scope, $ionicNavBarDelegate, $rootScope){
        $ionicNavBarDelegate.showBar(!$rootScope.globals.hideNavBar);

        $scope.data = [
          {key : 'problem', title: '问题', placeholder: '列出你的客户所遇到的最主要的问题', value : ''},
          {key : 'solution', title: '解决方案', placeholder: '针对目标客户的问题的解决方案和产品是什么？', value : ''},
          {key : 'metrics', title: '关键性指标', placeholder: '如何衡量自己的产品是否步入正轨？', value : ''},
          {key : 'position', title: '价值主张', placeholder: '你的产品能够提供给客户什么独特的价值？', value : ''},
          {key : 'advantage', title: '竞争优势', placeholder: '别人不可以迅速复制、用钱买来的竞争优势是什么？', value : ''},
          {key : 'channel', title: '渠道', placeholder: '你可以通过什么样的渠道找到你的潜在客户？', value : ''},
          {key : 'customer', title: '客户细分', placeholder: '列出你的最重要的三个客户细分', value : ''},
          {key : 'cost', title: '成本结构', placeholder: '列出你的固定和可变成本', value : ''},
          {key : 'revenue', title: '收入来源', placeholder: '列出你的收入来源', value : ''},
        ]
    })

})();
