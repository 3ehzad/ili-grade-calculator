angular.module('ILIGCapp', ['ngMaterial', 'ngMessages'])
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
