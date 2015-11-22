'use strict';

var app = angular.module('inquiry-app', ['ngSanitize', 'ui.select']);

    app.controller('InquiryController', function ($scope, $http) {
       
        $scope.products = gem;

        $scope.data = {
            availableOptions: [
                {id: '1', name: 'MAX'},
                {id: '2', name: 'Intel'},
                {id: '3', name: 'Micro'}
            ],
            selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
        };

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

        $scope.del = function (idx) {
            $scope.products.splice(idx, 1);
        }

         $scope.show = function (idx) {
           alert($scope.products[0]);
        }

        


    });

  app.service('getMfrsList',function($scope,$http){

    $scope.mfrs= [
            {name: 'tyco1',code:'tyco'},
            {name: 'max1',code:'max'},           
            {name: 'intel1',code:'intel'}
            ]; 


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
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',

    }, {
        pn: 'MAX232-1',
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',
    }, {
        pn: 'MAX232-1',
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',
    }, {
        pn: 'MAX232-1',
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',
    }]

    var gem = [{
        pn: 'MAX232-1',
        quantity: 100,
        delivery: '2015-11-15',
        mark: '非常着急',

    }]








