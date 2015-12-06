'use strict';

var app = angular.module('inquiry-app', ['ngSanitize', 'ui.select','autocomplete']);

    app.controller('InquiryController', function ($scope, $http) {

      $http({   url:'http://localhost:8080/demo-service/api/requiry_list/requiry_id',
                method:'GET'
                }).success(function(data,header,config,status){

                    //响应成功
                    $scope.requirys=data;
                    
                }).error(function(data,header,config,status){
                    //处理响应失败
                    
                };
       
        $scope.products = gem;       

        $scope.pn = {};

         $scope.pns = [
            {name: 'max232-1',code:'max232-1'},
            {name: '1n4148',code:'1n4148'},           
            {name: 'lm359',code:'lm359'}
            ];  

        $scope.mfr = {};

         $scope.mfrs = [
            {name: 'tyco',code:'tyco'},
            {name: 'max',code:'max'},           
            {name: 'intel',code:'intel'}
            ]; 

        $scope.add = function () { 
            var obj = {};    
            $scope.products.push(obj);
        }

        $scope.onclick = function () { 
           alert("----------");
        }

        $scope.del = function (idx) {
            $scope.products.splice(idx, 1);
        }
    });

  app.service('getMfrsList',function($scope,$http){

    $scope.mfrs= [
            {name: 'tyco1',code:'tyco'},
            {name: 'max',code:'max'},           
            {name: 'intel1',code:'intel'}
            ]; 


  });

   app.directive('autocomplete',function($http){

    });

  app.directive('mfsInput',function($http){     
      return {
              restrict: 'EA',
              template:'<div style="white-space:nowrap"><input type="txt" ng-model="model" placeholder="{{placeholder}}"/><button ng-click="mfsshow(model)">v</button><div><ul><li ng-repeat="mfr in othermodel"><div ng-click="test(mfr)"><p>{{mfr.name}}</div></li></ul></div></div>',
              // template:'<div><ul><li ng-repeat="mfr in mfrs">{{mfr.name}}</li></ul></div></div>',
              transclude: false,            
              scope: {
                 placeholder: '@',
                 model:'=',
                 othermodel:'='
              },           

              link:function(scope, ele, attrs){

                scope.test=function(mfr){                  
                  scope.model=mfr.name;
                };

                scope.mfsshow=function(mfr){                  
                  alert(mfr);
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
  });

  app.directive("pnInput",function($http){
      return {
        restrict: 'EA',       
        replace: false,
        link:function(scope, elements, attrs){ 

              elements[0].onblur = function(){
               $http({
                url:'http://localhost:8080/demo-service/api/mfrs/search?pn='+this.value,
                method:'GET'
                }).success(function(data,header,config,status){
                    //响应成功                    
                    scope.product.other=data;
                    scope.product.mfr=data[0].name;
                }).error(function(data,header,config,status){
                    //处理响应失败
                });
            }
         }
       };
  });







  app.directive("direselect",function(){

    return {   
    replace:false,
    restrict:'EA',
    link:function(scope,ele,attr){

        scope.data = {
            availableOptions: [
                {id: '1', name: 'MAX1'},
                {id: '2', name: 'Intel1'},
                {id: '3', name: 'Micro1'}
            ],
            selectedOption: {id: '3', name: 'Option C1'} //This sets the default value of the select in the ui
        };

        
    }
};




  });


    

    var gem1 = [{
        pn: 'MAX232-1',
        mfr:'max',
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',

    }, {
        pn: 'MAX232-1',
        mfr:'max',
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',
    }, {
        pn: 'MAX232-1',
        mfr:'max',
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',
    }, {
        pn: 'MAX232-1',
        mfr:'max',
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',
    }]

    var gem = [{
        pn: 'MAX232-1',
        mfr:'max',
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',
        other: [
            {name: 'tyco',code:'tyco'},
            {name: 'max',code:'max'},           
            {name: 'intel',code:'intel'}
            ],

    }]








