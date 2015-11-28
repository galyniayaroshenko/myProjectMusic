angular.module('app')
  .controller('AlbumsViewController', ['$scope','$stateParams', 'Albums', function($scope, $stateParams, Albums) {
    console.log($stateParams.id);
    $scope.viewAlbums = Albums.get({ action: $stateParams.id });
    console.log($scope.albums);
  }]);
