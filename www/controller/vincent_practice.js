(function(){
    'use strict';
    moduleC.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app.practice', {
            url: '/practice',
            views: {
                'menuContent': {
                    templateUrl: 'templates/vincent_practice.html',
                    controller: 'practiceController'
                }
            }
        })
    });


    moduleC.component('dragAndDropExample', {
        template: `<ul ng-sortable>
            <li ng-repeat="item in ['burgers', 'chips', 'hotdog']">

                <div class='card'>{{item}}</div>
            </li>
        </ul>`,
    })

    // moduleI.directive('proverb', function($interval, $timeout){
    //     return {
    //         restrict: 'A',
    //         replace: true,
    //         scope: {},
    //         template: '<div style="background: #000;margin-top: 60px;transition: all 1s ease 2s" class="test">test</div>',
    //         link: function(scope, element, attrs){
    //             $interval(function(){
    //                 jQuery('.test').toggle();
    //             }, 3000)
    //
    //         }
    //     };
    // });


    // moduleC.directive('draggable', function() {
    //     return function(scope, element) {
    //         var el = element[0];
    //
    //         el.draggable = true;
    //
    //         el.addEventListener(
    //             'dragstart',
    //             function(e) {
    //                 console.log(e)
    //                 e.dataTransfer.effectAllowed = 'move';
    //                 e.dataTransfer.setData('Text', this.id);
    //                 this.classList.add('drag');
    //                 return false;
    //             },
    //             false
    //         );
    //
    //         el.addEventListener(
    //             'dragend',
    //             function(e) {
    //                 this.classList.remove('drag');
    //                 return false;
    //             },
    //             false
    //         );
    //     }
    // });
    //
    // moduleC.directive('droppable', function() {
    //     return {
    //         scope: {},
    //         link: function(scope, element) {
    //             // again we need the native object
    //             var el = element[0];
    //             el.addEventListener(
    //                 'dragover',
    //                 function(e) {
    //                     e.dataTransfer.dropEffect = 'move';
    //                     // allows us to drop
    //                     if (e.preventDefault) e.preventDefault();
    //                     this.classList.add('over');
    //                     return false;
    //                 },
    //                 false
    //             );
    //             el.addEventListener(
    //                 'dragenter',
    //                 function(e) {
    //                     this.classList.add('over');
    //                     return false;
    //                 },
    //                 false
    //             );
    //
    //             el.addEventListener(
    //                 'dragleave',
    //                 function(e) {
    //                     this.classList.remove('over');
    //                     return false;
    //                 },
    //                 false
    //             );
    //             el.addEventListener(
    //                 'drop',
    //                 function(e) {
    //                     // Stops some browsers from redirecting.
    //                     if (e.stopPropagation) e.stopPropagation();
    //
    //                     this.classList.remove('over');
    //
    //                     var item = document.getElementById(e.dataTransfer.getData('Text'));
    //                     this.appendChild(item);
    //
    //                     return false;
    //                 },
    //                 false
    //             );
    //
    //         }
    //     }
    // });
    moduleC.controller('practiceController', function($scope){
    //     window.drag = $scope.drag = function(ev){
    //         ev.originalEvent.dataTransfer.effectAllowed = 'move';
    //
    //         console.log(ev);
    //         ev.dataTransfer.setData('text', ev.target.id);
    //     };
    //     window.allowDrop = $scope.allowDrop = function(ev) {
    //         ev.preventDefault();
    //     };
    //     window.drop = $scope.drop = function (ev) {
    //         ev.preventDefault();
    //         var data = ev.dataTransfer.getData("text");
    //         ev.target.appendChild(document.getElementById(data));
    //     }
    //
    })

})();
