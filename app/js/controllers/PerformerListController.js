angular.module('app')
.controller('PerformerListController', ['$scope', '$state', '$window', 'Performer', function($scope, $state, $window, Performer) {
  $scope.performerList = Performer.get();

console.log($scope.performerList);
  $scope.deletePerformer = function (arg) {
    $scope.arg = arg;
    Performer.delete({ action: $scope.arg.id }, function () {
      $scope.performerList = Performer.get();
    });
  };

}]);
