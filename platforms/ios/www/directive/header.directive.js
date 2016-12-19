(function(){
    'use strict';

    moduleC.directive('commonHeader', ['$rootScope', commonHeader]);
    // commonHeader.$inject = ['$rootScope'];
    function commonHeader($rootScope){
        return {
            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: 'html/header.html',
            link: function(scope, element, attrs){
                function hideNavBar(){
                    var hideNavBar = false;
                    var IsPC = function(){
                        var userAgentInfo = navigator.userAgent;
                        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
                        var flag = true;
                        for (var v = 0; v < Agents.length; v++) {
                            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
                        }
                        return flag;
                    }
                    hideNavBar = (IsPC() ? true : false)
                    return hideNavBar;
                }
                scope.showHeader = (hideNavBar() ? true : false);
            }
        };
    }
})();
