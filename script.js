angular.module('ILIGCapp', ['ngMaterial', 'ngMessages'])

  .controller('gradeController', ['$scope', function ($scope) {
    $scope.calc = function () {

       // $scope.reading = $scope.rd * 4;
      $scope.sparray = (new Function("return [" + $scope.sp+ "];")());
      $scope.spsum = $scope.sparray.reduce((a, b) => a + b, 0);
      console.log($scope.spsum);
      
      $scope.speaking = Number($scope.spsum / $scope.sparray.length) * 4;
      console.log($scope.speaking);
      
      // $scope.reading = $scope.rd * 3;
      $scope.rdarray = (new Function("return [" + $scope.rd+ "];")());
      $scope.rdsum = $scope.rdarray.reduce((a, b) => a + b, 0);
      console.log($scope.rdsum);

      $scope.reading = Number($scope.rdsum / $scope.rdarray.length) * 3;
      console.log($scope.reading);
     
      // $scope.writing = $scope.wr * 1;
      $scope.wrarray = (new Function("return [" + $scope.wr+ "];")());
      $scope.wrsum = $scope.wrarray.reduce((a, b) => a + b, 0);
      console.log($scope.wrsum);

      $scope.writing = Number($scope.wrsum / $scope.wrarray.length) * 1;
      console.log($scope.writing);

      $scope.allaverage = $scope.speaking + $scope.reading + $scope.writing;
      $scope.finalgrade = Number($scope.allaverage / 8).toFixed(2);
      console.log($scope.finalgrade);
    }

  }])
