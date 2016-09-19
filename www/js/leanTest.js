moduleC.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.leanTest', {
      url: '/leantest',
      views: {
          'menuContent': {
              templateUrl: 'templates/leanTest.html',
              controller: 'leanTestCtrl'
          }
      }
  });
});


// 输入框出现自动获取焦点 未完成
// moduleI.directive('setFocus', function(){
//       return function(scope, element){
//          element[0].focus();
//       };
// });

moduleC.controller('leanTestCtrl', function($scope, $ionicNavBarDelegate){
    $ionicNavBarDelegate.showBar(false);
    $scope.leanCanvasTitle = '';
    $scope.inputContent = [{
        title: '问题', // block名称
        placeholder: '列出你的客户所遇到的最主要的问题', // 提示内容
        hint: true, // 是否显示提示
        value: '', // 用户输入的数据
        readable: true, // 是否只读
        commentable: false, //是否可评论
        comment: [{
            name: 'vincent',
            content: 'this is a comment'
        },{
            name: 'cheeee',
            content: 'this is a comment'
        },{
            name: 'cheeee',
            content: 'this is a comment'
        }]
    },{
        title: '解决方案',
        placeholder: '针对目标客户的问题的解决方案和产品是什么？',
        hint: true,
        value: '',
        readable: true,
        commentable: false,
        comment: []
    },{
        title: '关键指标',
        placeholder: '如何衡量自己的产品是否步入正轨？',
        hint: true,
        value: '',
        readable: true,
        commentable: false,
        comment: []
    },{
        title: '独特的价值主张',
        placeholder: '你的产品能够提供给客户什么独特的价值？',
        hint: true,
        value: '',
        readable: true,
        commentable: false,
        comment: []
    },{
        title: '竞争优势',
        placeholder: '别人不可以迅速复制、用钱买来的竞争优势是什么？',
        hint: true,
        value: '',
        readable: true,
        commentable: false,
        comment: []
    },{
        title: '渠道',
        placeholder: '你可以通过什么样的渠道找到你的潜在客户？',
        hint: true,
        value: '',
        readable: true,
        commentable: false,
        comment: []
    },{
        title: '客户细分',
        placeholder: '列出你的最重要的三个客户细分',
        hint: true,
        value: '',
        readable: true,
        commentable: false,
        comment: []
    },{
        title: '成本结构',
        placeholder: '列出你的固定和可变成本',
        hint: true,
        value: '',
        readable: true,
        commentable: false,
        comment: []
    },{
        title: '收入来源',
        placeholder: '列出你的收入来源',
        hint: true,
        value: '',
        readable: true,
        commentable: false,
        comment: []
    }];

    $scope.setting = {
        currentId: 0,
        commentBox: false,
        currentComment:''
    }



    // 点击每个block进入编辑模式
    $scope.toEdit = function(index){
        var length = $scope.inputContent.length;
        for(var i=0;i<length;i++){
            $scope.inputContent[i].readable = true;
            $scope.dirtyCheck(i);
        }
        $scope.inputContent[index].hint = false;
        $scope.inputContent[index].readable = false;
        setTimeout(function(){angular.element('#textarea'+index).focus();},500);
    }

    //点击保存按钮
    $scope.toSave = function(index){
        $scope.inputContent[index].readable = true
        $scope.dirtyCheck(index);
    }

    // 鼠标悬浮时显示评论按钮
    $scope.showComment = function (index) {
        $scope.inputContent[index].commentable = true
    }
    $scope.leaveComment = function (index) {
        $scope.inputContent[index].commentable = false
    }

    $scope.toComment = function(index){
        $scope.setting.currentId = index;
        $scope.setting.commentBox = true;
    }
    $scope.closeCommentBox = function(){
        $scope.setting.commentBox = false;
    }

    $scope.comment = function(){
        if($scope.setting.currentComment !== ''){
            $scope.inputContent[$scope.setting.currentId].comment.push({
                name: 'user',
                content: $scope.setting.currentComment
            })
        }
        $scope.setting.currentComment = '';
    }
    // check是否value值有更改，控制提示是否显示
    $scope.dirtyCheck = function(index){
        if($scope.inputContent[index].value == ''){
            $scope.inputContent[index].hint = true;
        }else{
            $scope.inputContent[index].hint = false;
        }
    }

})
