 angular.module('app')
  .controller('MusicEditController', ['Music', 'Genre', 'Albums', 'Performer', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', function (Music, Genre, Albums, Performer, $stateParams, $scope, $state, Upload, $timeout, host) {
    $scope.genreListSelects = Genre.get1();
    $scope.performerListSelects = Performer.get();
    $scope.albumsListSelects = Albums.get();


    console.log($stateParams.id);
    $scope.oneMusic = Music.get1({ action: $stateParams.id });
    console.log($scope.oneMusic);
$scope.music = {}


      $scope.updateMusic = function(file, fileimg) {
        console.log("wow");
        console.log($scope.music);
        console.log($stateParams.id);

console.log(file);
      $scope.message = 'Music was edit';
          var link = host + 'music/edit';
          file.upload = Upload.upload({
            url: link,
            data: {file: file, fileimg: fileimg, _id: $stateParams.id, title: $scope.music.title, visible:$scope.music.visible, date: $scope.music.date,  idGenre:$scope.music.genre,  idPerformer:$scope.music.performer, idAlbums:$scope.music.Albums, description:$scope.music.description},
          });
          file.upload.then(function (response) {
            $timeout(function () {
              file.result = response.data;
            });
          }, function (response) {
            if (response.status > 0)
              $scope.errorMsg = response.status + ': ' + response.data;
          }, function (evt) {
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          });

      }
  }]);
