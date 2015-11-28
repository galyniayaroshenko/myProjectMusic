angular.module('app')
.controller('MusicListController', ['$scope', '$state', '$window', 'Music', function($scope, $state, $window, Music) {
  $scope.musicList = Music.get();

console.log($scope.musicList);
  // $scope.deleteMusic = function(mu) {
  //   if (popupService.showPopup('Really delete this?')) {
  //     mu.$delete(function() {
  //       $window.location.href = ''; //redirect to home
  //     });
  //   }
  // };
  $scope.deleteMusic = function (arg) {
    $scope.arg = arg;
    Music.delete({ action: $scope.arg.id }, function () {
      $scope.musicList = Music.get();
    });
  };

}]);


//   $scope.loadMusic = function() {
//     $scope.music = Music.get({ id: $stateParams.id });
//     console.log($scope.music);
//   };
//
//   $scope.loadMusic();
// }]);
