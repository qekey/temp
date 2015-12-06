(function () {
    var app = angular.module('inquiry', ["ngTouch", "angucomplete-alt"]);

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

         $scope.pns = [
            {name: 'max232-1',code:'max232-1'},
            {name: '1n4148',code:'1n4148'},           
            {name: 'lm359',code:'lm359'}];       

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

         $scope.change = function (data) {
           console.log(data,"---------------");
        }
         $scope.selected=function(data){
        	 
        	 console.log("!!!1")
        	 //console.log(product)
        	 
        	  console.log(data)
        	 
        	 /*if(data){
        		 console.log(data.title)
        	 	product.pn= data.title
        	 }*/
        }

    });


     app.controller('MainController', ['$scope', '$http',
        function MainController($scope, $http) {

        $scope.people = [
            {firstName: "Daryl", surname: "Rowland", twitter: "@darylrowland", pic: "img/daryl.jpeg"},
            {firstName: "Alan", surname: "Partridge", twitter: "@alangpartridge", pic: "img/alanp.jpg"},
            {firstName: "Annie", surname: "Rowland", twitter: "@anklesannie", pic: "img/annie.jpg"}
        ];

       

    }
]);


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






})();


