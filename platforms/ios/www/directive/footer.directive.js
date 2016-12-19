(function(){
    'use strict';
    // moduleS.factory('hideNavBar', hideNavBar);
    // function hideNavBar(){
    //     var hideNavBar = false;
    //     var IsPC = function(){
    //         var userAgentInfo = navigator.userAgent;
    //         console.log(userAgentInfo);
    //         var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    //         var flag = true;
    //         for (var v = 0; v < Agents.length; v++) {
    //             if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    //         }
    //         return flag;
    //     }
    //     hideNavBar = (IsPC() ? true : false)
    //     return hideNavBar;
    // }
    // moduleC.directive('leanCanvasBox', function(){
    //     return {
    //         restrict: 'EA',
    //         replace: true,
    //         scope: {
    //             title: '@title',
    //             placeholder: '@placeholder',
    //             content: '=content'
    //         },
    //         template: '<div class="sarking" ng-mouseover="showCommentBtn()" ng-mouseleave="hideCommentBtn()">'
    //             + '<div class="lean-canvas-title">{{title}}</div>'
    //             + '<textarea ng-model="content" class="lean-canvas-textarea" placeholder="{{placeholder}}"></textarea>'
    //             + '<div class="lean-canvas-btns" id="lean-comment-problem" ng-show="showBox">'
    //                 + '<button class="lean-canvas-btn lean-canvas-btn-comment" ng-click="toComment()">评论</button>'
    //             + '</div>'
    //             + '</div>',
    //         link: function(scope, element, attrs){
    //             scope.showBox = false;
    //             scope.showCommentBtn = function(){
    //                 scope.showBox = true;
    //             };
    //             scope.hideCommentBtn = function(){
    //                 scope.showBox = false;
    //             };
    //             scope.toComment = function() {
    //                 alert(scope.content);
    //             }
    //         }
    //
    //     }
    // });



    moduleC.directive('commonFooter', commonFooter);
    function commonFooter(){
        return {
            restrict: 'EA',
            replace: true,
            scope: {

            },
            templateUrl: 'html/footer.html'
        };
    }
})();
