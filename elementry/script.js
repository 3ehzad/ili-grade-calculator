angular.module('ILIGCapp', ['ngMaterial', 'ngMessages'])

  .controller('gradeController', ['$scope', '$mdDialog', '$mdToast', function ($scope, $mdDialog, $mdToast) {
    $scope.calc = function () {
      $scope.sparray = (new Function("return [" + $scope.sp + "];")());
      $scope.spsum = $scope.sparray.reduce((a, b) => a + b, 0);
      $scope.speaking = Number($scope.spsum / $scope.sparray.length) * 2;

      $scope.rdarray = (new Function("return [" + $scope.rd + "];")());
      $scope.rdsum = $scope.rdarray.reduce((a, b) => a + b, 0);
      $scope.reading = Number($scope.rdsum / $scope.rdarray.length) * 2;

      $scope.lnarray = (new Function("return [" + $scope.ln + "];")());
      $scope.lnsum = $scope.lnarray.reduce((a, b) => a + b, 0);
      $scope.listening = Number($scope.lnsum / $scope.lnarray.length) * 2;

      $scope.wrarray = (new Function("return [" + $scope.wr + "];")());
      $scope.wrsum = $scope.wrarray.reduce((a, b) => a + b, 0);
      $scope.writing = Number($scope.wrsum / $scope.wrarray.length) * 1;

      $scope.wr2array = (new Function("return [" + $scope.wr2 + "];")());
      $scope.wr2sum = $scope.wr2array.reduce((a, b) => a + b, 0);
      $scope.writing2 = Number($scope.wr2sum / $scope.wr2array.length) * 1;

      $scope.allaverage = $scope.speaking + $scope.reading + $scope.listening + $scope.writing + $scope.writing2;
      $scope.pregrade = Number($scope.allaverage / 8).toFixed(2);
      $scope.finalgrade = $scope.pregrade * 20;
      
      // $mdToast.show(
      //   $mdToast.simple()
      //     .textContent('Class Grade: ' + $scope.finalgrade)
      //     .position("top right")
      //     .theme('success-toast')
      //     .hideDelay(7000)
      // );
    }
    $scope.reset = function () {
      $scope.sp = '';
      $scope.rd = '';
      $scope.wr = '';
    }
  }])
    .controller('headController', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
    /* start dialog */
    $scope.status = '  ';
    $scope.help = function (ev) {
      $mdDialog.show({
        controller: diagController,
        templateUrl: 'help.tmpl.html',
        parent: angular.element(document.querySelector('#popupContainer')),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true,
        preserveScope: true
      })
    };
    function diagController($scope, $mdDialog) {
      $scope.hide = function () {
        $mdDialog.hide();
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };
    }
    /* end dialog */
  }])
