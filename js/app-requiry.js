'use strict';

var app = angular.module('inquiry-app', ['ngSanitize','xw-select','xw-autocomplete']);

    app.controller('InquiryListController', function ($scope, $http) {

      $http({   url:'http://localhost:8080/demo-service/api/requiry_list/requiry_id',
                method:'GET'
                }).success(function(data,header,config,status){

                    //响应成功
                    $scope.requirys=data;
                    
                }).error(function(data,header,config,status){
                    //处理响应失败
                    
                });
          

        // $scope.pn = {};

        //  $scope.pns = [
        //     {name: 'max232-1',code:'max232-1'},
        //     {name: '1n4148',code:'1n4148'},           
        //     {name: 'lm359',code:'lm359'}
        //     ];  

        // $scope.mfr = {};

        //  $scope.mfrs = [
        //     {name: 'tyco',code:'tyco'},
        //     {name: 'max',code:'max'},           
        //     {name: 'intel',code:'intel'}
        //     ]; 

      /*  $scope.add = function () { 
            var obj = {};    
            $scope.requirys.push(obj);
        }*/

      

       $scope.display = function (requiry) {          
            if(requiry.flag=='init'){
              return {display:'none'};
            }else{
               return {display:'block'};
            }            
        }
        $scope.delShow = function (requiry) {          
            return requiry.flag!='init';              
        }

        $scope.del = function (idx) {          
            $scope.requirys.splice(idx, 1);
        }
    });


 app.controller('InquiryController', function ($scope, $http) {

    

   $scope.pnChangeForEnter=function(event){  
   if (event.keyCode !== 13) return;
       $scope.pnChange(event,requiry);
   } 

    
   $scope.pnSelected=function(){
       $scope.pnChange($scope.requiry);
   } 


   $scope.pnChange=function(requiry){     

        $http({
                url:'http://localhost:8080/demo-service/api/inventory/find?pn='+requiry.pn,
                method:'GET'
                }).success(function(data,header,config,status){
                    //响应成功                    
                    $scope.requiry.relevant=data;
                    $scope.requiry.mfr=$scope.requiry.relevant[0].name;
                }).error(function(data,header,config,status){
                    //处理响应失败
                });

               var flag= requiry.flag;
               if(flag=='init'){
                 var obj = {flag:'init'};    
                 $scope.requirys.push(obj);
                 requiry.flag=null;

                
               }
   } 

 });


  app.directive('mfsInput',function($http){

      scope.dis=false ; 

      return {
              restrict: 'EA',
              template:'<div style="white-space:nowrap"><input type="txt" ng-model="model" placeholder="{{placeholder}}"/><button ng-click="mfsshow(model)">v</button><div ng-show="dispaly()"><ul><li ng-repeat="requiry in othermodel"><div ng-click="test(requiry)"><p>{{requiry.mfr}}</br>{{requiry.pn}}</div></li></ul></div></div>',
              // template:'<div><ul><li ng-repeat="mfr in mfrs">{{mfr.name}}</li></ul></div></div>',                         
              scope: {
                 placeholder: '@',
                 model:'=',
                 othermodel:'=',
                 style:'@'              
              },           

              link:function(scope, ele, attrs){

                scope.test=function(req){
                           
                  scope.model=req.mfr;
                };

                scope.mfsshow=function(mfr){  
                alert(mfr);                
                alert(scope.style); 
                  scope.style={dispaly:'block'};
                  alert(scope.style); 
                };

                 scope.dispaly=function(){    
                            alert(scope.dis);
                 return false;
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
                url:'http://localhost:8080/demo-service/api/inventory/find?pn='+this.value,
                method:'GET'
                }).success(function(data,header,config,status){
                    //响应成功    

                    alert("--------------------");                
                  /*  scope.requiry.relevant=data;
                    scope.requiry.mfr=data[0].name;
                    alert( scope.requiry.mfr);*/
                }).error(function(data,header,config,status){
                    //处理响应失败
                });
            }
         }
       };
  });


  app.directive("eleInput",function($http){
      return {
        restrict: 'EA',       
        replace: false,
        link:function(scope, elements, attrs){ 
          
           if(scope.requiry.flag=="init"){  
           // alert(elements[0]) ;     
             elements[0].focus();
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


    

 








