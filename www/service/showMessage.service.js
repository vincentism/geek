(function(){
    'use strict';
    moduleS.factory('showMessage', hideNavBar);
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
})();
