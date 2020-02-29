angular.module('ILIGCapp', ['ngMaterial', 'ngMessages'])

  .controller('gradeController', ['$scope', '$mdDialog', '$mdToast', function ($scope, $mdDialog, $mdToast) {
    $scope.calc = function () {
      $scope.sparray = (new Function("return [" + $scope.sp + "];")());
      $scope.spsum = $scope.sparray.reduce((a, b) => a + b, 0);
      $scope.speaking = Number($scope.spsum / $scope.sparray.length) * 2;
      console.log('sp: ' + $scope.speaking);

      $scope.rdarray = (new Function("return [" + $scope.rd + "];")());
      $scope.rdsum = $scope.rdarray.reduce((a, b) => a + b, 0);
      $scope.reading = Number($scope.rdsum / $scope.rdarray.length) * 2;
      console.log('rd: ' + $scope.reading);

      $scope.lnarray = (new Function("return [" + $scope.ln + "];")());
      $scope.lnsum = $scope.lnarray.reduce((a, b) => a + b, 0);
      $scope.listening = Number($scope.lnsum / $scope.lnarray.length) * 2;
      console.log('ln: ' + $scope.listening);

      $scope.wrarray = (new Function("return [" + $scope.wr + "];")());
      $scope.wrsum = $scope.wrarray.reduce((a, b) => a + b, 0);
      $scope.writing = Number($scope.wrsum / $scope.wrarray.length) * 1;
      console.log('wr: ' + $scope.writing);

      $scope.wbarray = (new Function("return [" + $scope.wb + "];")());
      $scope.wbsum = $scope.wbarray.reduce((a, b) => a + b, 0);
      $scope.workbook = Number($scope.wbsum / $scope.wbarray.length) * 1;
      console.log('wb: ' + $scope.workbook);

      $scope.allaverage = $scope.speaking + $scope.reading + $scope.listening + $scope.writing + $scope.workbook;
      console.log('total: '+$scope.allaverage);
      $scope.pregrade = Number($scope.allaverage / 8).toFixed(2);
      console.log('pre/8: ' + $scope.pregrade);
      $scope.finalgrade = $scope.pregrade * 20;
      console.log('final: ' + $scope.finalgrade);
      
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
        templateUrl: '../help.tmpl.html',
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
