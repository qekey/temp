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

   angular.module('xw-autocomplete', []).directive('xwAutocomplete', ['$http' ,'$timeout',function ($http,$timeout) {

      var KEY_DW  = 40;
      var KEY_RT  = 39;
      var KEY_UP  = 38;
      var KEY_LF  = 37;
      var KEY_ES  = 27;
      var KEY_EN  = 13;
      var KEY_TAB =  9;
      
      return {
              restrict: 'EA',
               // template:'<div style="white-space:nowrap"><input type="txt" ng-model="model" placeholder="{{placeholder}}"/><button ng-click="show()">v</button><div ng-show="isShow()"><ul><li ng-repeat="obj in othermodel"><div ng-click="test(obj)"><p>{{obj.mfr}}</div></li></ul></div></div>',
              // template:'<div><ul><li ng-repeat="mfr in mfrs">{{mfr.name}}</li></ul></div></div>',
              // template:'<div class="angucomplete-holder"><input ng-class="{\'angucomplete-dropdown-visible\': showDropdown}" type="txt" ng-model="model" placeholder="{{placeholder}}"/><ul><li ng-repeat="opt in optlist" ng-class="{\'angucomplete-selected-row\': $index == currentIndex}"><div ng-click="select(opt)" class="angucomplete-description">{{opt.name}}</div></li></ul></div>',
                template:'<div class="angucomplete-holder" ng-class="{\'angucomplete-dropdown-visible\': showDropdown}">'+
                '<input ng-class="{\'angucomplete-input-not-empty\': notEmpty}" type="txt" ng-model="model" placeholder="{{placeholder}}"/>'+
                '<div><div ng-repeat="opt in optlist" ng-mouseenter="hoverRow($index)" ng-class="{\'angucomplete-selected-row\': $index == currentIndex}"><div ng-click="select(opt)" class="angucomplete-title">{{opt.name}}</div></div></div></div>',
               scope: {
                 placeholder: '@',
                 model:'=',
                 complete:'&',
                 remoteUrl:'@'    
              },                            
                     

              link:function(scope, elem, attrs){

                scope.showDropdown=true;
                scope.notEmpty=true;
                scope.currentIndex=-1;

                var searchTimer = null;

                 var inputField = elem.find('input');   

                  inputField.on('keydown', keydownHandler);            

                  inputField.on('keyup', keyupHandler);
                  


                  // inputField.on('keydown', keydownHandler);

                    scope.hoverRow = function(index) {                    

                        scope.currentIndex = index;
                  }
      

                   scope.select=function(opt){ 
                         
                         scope.model=opt.name;                      
                         scope.complete();     

                   }

                  

                    function ie8EventNormalizer(event) {
                            return event.which ? event.which : event.keyCode;
                    }

                   

                   function optionSelect(event){
                     alert("-----option--------");
                   }



                  // function selected(opt){
                  //   alert(opt);
                  //   scope.model=opt.name;

                   
                  /*  scope.$apply(function(){
                       scope.complete({$event: event});
                      });  */
                  // }


                  function initResults() {
                      // scope.showDropdown = displaySearching;

                      // scope.showDropdown = displaySearching;
                      scope.currentIndex = scope.focusFirst ? 0 : -1;
                      scope.results = [];
                      
                      
                       // scope.results = [];
                  }

                 function keydownHandler(event) {

                  var which =ie8EventNormalizer(event);  


                  if(which==KEY_DW&&scope.optlist){ 

                    if(scope.currentIndex+1<scope.optlist.length){
                     
                     scope.$apply(function() {
                        scope.currentIndex++; 
                        updateInputField();
                      });
                     
                     }



                   }else if(which==KEY_UP&&scope.optlist){
                      if(scope.currentIndex>0){
                          scope.$apply(function() {
                               scope.currentIndex--; 
                               updateInputField();
                            });
                      }
                  }else{
                    clearResults();
                  }
                       
                   }
                 

       

                 function keyupHandler(event) {

                  var which =ie8EventNormalizer(event);
              

                  if(which==KEY_DW){

                    

                  }else if(which==KEY_UP){

                  }else{
                     initResults();
                 

                  if (searchTimer) {
                    $timeout.cancel(searchTimer);
                  }

                  scope.searching = true;

                  searchTimer = $timeout(function() {
                        searchTimerComplete(scope.model);
                          }, 400);

                    }

                

                    // scope.$apply(function(){
                    //        scope.complete();
                    //   });  

                                  
                  }



                function searchTimerComplete(searchStr){                 

                     $http({
                        url:scope.remoteUrl+scope.model,
                         method:'GET'
                      }).success(function(data,header,config,status){

                    //响应成功
                    scope.optlist=data;
                    
                   }).error(function(data,header,config,status){
                    //处理响应失败
                    
                    });

                 }


                  function clearResults() {
                     scope.optlist=null;
                      // scope.showDropdown = false;
                      // scope.results = [];
                      // if (dd) {
                      //     dd.scrollTop = 0;
                      //   }
                     }

                 function updateInputField(){

                  scope.model=scope.optlist[scope.currentIndex].name;



                    // inputField.val(scope.model);

                   //   var current = scope.results[scope.currentIndex];
                   //  if (scope.matchClass) {
                   //      inputField.val(extractTitle(current.originalObject));
                   //     }
                   //  else {
                   //     // inputField.val(current.title);
                   //     inputField.val(scope.model);
                   // }
              }

                 



               // alert(attrs.remoteUrl);

              // scope.urlStr=attrs.remoteUrl+scope.model;

               scope.keypress=function(pn){

                

               

                 $http({
                  url:scope.urlStr,
                  method:'GET'
                }).success(function(data,header,config,status){

                    //响应成功
                    
                    
                }).error(function(data,header,config,status){
                    //处理响应失败
                    
                });
               }

               }

            
       };
 






  



  }])}));


    

    






