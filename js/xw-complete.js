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

   angular.module('xw-autocomplete', []).directive('xwAutocomplete',  function () {
   
      
      return {
              restrict: 'EA',
               // template:'<div style="white-space:nowrap"><input type="txt" ng-model="model" placeholder="{{placeholder}}"/><button ng-click="show()">v</button><div ng-show="isShow()"><ul><li ng-repeat="obj in othermodel"><div ng-click="test(obj)"><p>{{obj.mfr}}</div></li></ul></div></div>',
              // template:'<div><ul><li ng-repeat="mfr in mfrs">{{mfr.name}}</li></ul></div></div>',
              template:'<div>{{remoterUrl}}</div>'
                        
                     

              link:function(scope, ele, attrs){

               alert(attrs.remoteUrl);


           }
       };
 






  



  })}));


    

    






