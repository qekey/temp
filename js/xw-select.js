'use strict';

(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    // CommonJS
    module.exports = factory(require('angular'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['angular'], factory);
  } else {
    // Global Variables
    factory(root.angular);
  }
}(window, function (angular) {

   angular.module('xw-select', []).directive('xwSelect',  function () {
   
      
      return {
              restrict: 'EA',
               template:'<div style="white-space:nowrap"><input type="txt" ng-model="model" placeholder="{{placeholder}}"/><button ng-click="show()">v</button><div ng-show="isShow()"><ul><li ng-repeat="data in localData"><div ng-click="select(data)"><p>{{data.name}}</div></li></ul></div></div>',
              // template:'<div><ul><li ng-repeat="mfr in mfrs">{{mfr.name}}</li></ul></div></div>',
              // template:'<div>aaaaaaaa</div>',
                        
              scope: {
                 placeholder: '@',
                 model:'=',
                 localData:'='                 
              },           

              link:function(scope, ele, attrs){

                scope.display=false;

                scope.select=function(data){                  
                  scope.model=data.name;
                };

                scope.show=function(){
                  scope.display=!scope.display;
                };

                scope.isShow=function(){                
                  return scope.display;
                };

                ele[0].onkeyup = function(){  
                           
                $http({
                  url:'http://localhost:8080/demo-service/api/mfrs/search?pn='+scope.model,
                  method:'GET'
                }).success(function(data,header,config,status){

                    //响应成功
                    scope.othermodel=data;
                    
                }).error(function(data,header,config,status){
                    //处理响应失败
                    
                });
               }


           }
       };
 






  



  })}));


    

    






