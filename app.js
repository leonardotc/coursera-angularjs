(function() {
  'use strict'

  var myFirstAngularController = function($scope) {
    //start as an empty list
    $scope.lunchList = '';
    $scope.tooMuchMsg = 'Enjoy!';

    $scope.isTooMuch = function() {
      var str = $scope.lunchList;
      var checkEmpt

      if(str.length > 0) {

        $scope.tooMuchMsg = (str.includes(",")
          && str.split(',').filter(function(el) { return el.length > 0 }).length > 3)? 
          'Too much!' : 'Enjoy!';

      }
      else {
        $scope.tooMuchMsg = 'Please enter data first';
      }
    };
  };

  myFirstAngularController.$inject = ['$scope'];


  angular.module('myFirstAngularApp',[])
    .controller('myFirstAngularController',myFirstAngularController);

})();