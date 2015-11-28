angular.module('app')
  .controller('MusicViewController', ['$scope','$stateParams', 'Music', function($scope, $stateParams, Music) {
    console.log($stateParams.id);
    $scope.viewMusic = Music.get({ action: $stateParams.id });
    console.log($scope.viewMusic);
    // $scope.viewMusic = function (arg) {
    //   $scope.arg = arg;
    //   console.log($scope.arg);
    //   $scope.music = Music.get1({ id: $stateParams.id });
    // }
  }]);
