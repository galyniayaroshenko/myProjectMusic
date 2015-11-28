angular.module('app')
  .controller('AlbumsCreateController', ['Albums', 'Performer', 'Genre', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', function (Albums, Performer, Genre, $stateParams, $scope, $state, Upload, $timeout, host) {
$scope.performerListSelects = Performer.get();
$scope.genreListSelects = Genre.get1();


$scope.albums = {};



console.log($scope.albums);

      $scope.createAlbums = function(fileimg) {
        console.log("wow");
console.log($scope.albums);

console.log($scope.performerListSelects.performer);
console.log($scope.genreListSelects.genre);
      $scope.message = 'Albums was add';
          var link = host + 'albums/new';
          fileimg.upload = Upload.upload({
            url: link,
            data: {fileimg: fileimg, _id: $stateParams.id, title: $scope.albums.title, description:$scope.albums.description, idPerformer:$scope.albums.performer, idGenre:$scope.albums.genre},
          });
          fileimg.upload.then(function (response) {
            $timeout(function () {
              fileimg.result = response.data;
            });
          }, function (response) {
            if (response.status > 0)
              $scope.errorMsg = response.status + ': ' + response.data;
          }, function (evt) {
            fileimg.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          });

      }
  }]);
