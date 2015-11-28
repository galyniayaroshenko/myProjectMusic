angular.module('app')
  .controller('AlbumsEditController', ['Albums', 'Performer', 'Genre', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', function (Albums, Performer, Genre, $stateParams, $scope, $state, Upload, $timeout, host) {
$scope.performerListSelects = Performer.get();
$scope.genreListSelects = Genre.get1();
$scope.albums = {};


$scope.oneAlbums = Albums.get1({ action: $stateParams.id });
console.log($scope.albums);
console.log('йцуке');


      $scope.updateAlbums = function(fileimg) {
        console.log("wow");
console.log(fileimg);
console.log($scope.albums);

      $scope.message = 'Albums was edit';
          var link = host + 'albums/edit';
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
