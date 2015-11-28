angular.module('app')
.controller('AlbumsListController', ['$scope', '$state', '$window', 'Albums', function($scope, $state, $window, Albums) {
  $scope.albumsList = Albums.get();


  $scope.deleteAlbums = function (arg) {
    //console.log(arg);
    $scope.arg = arg;
    console.log($scope.arg.id);
    Albums.delete({ action: $scope.arg.id }, function (data) {
      console.log(data);
      $scope.albumsList = Albums.get();
    });
  };

}]);
