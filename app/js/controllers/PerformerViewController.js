angular.module('app')
  .controller('PerformerViewController', ['$scope','$stateParams', 'Performer', function($scope, $stateParams, Performer) {
    console.log($stateParams.id);
    $scope.viewPerformer = Performer.get({ action: $stateParams.id });
    console.log($scope.performer);

  }]);
