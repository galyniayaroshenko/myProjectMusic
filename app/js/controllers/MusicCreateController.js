angular.module('app')
  .controller('MusicCreateController', ['Music','Genre', 'Albums','Performer', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', function (Music, Genre, Albums, Performer, $stateParams, $scope, $state, Upload, $timeout, host) {
$scope.genreListSelects = Genre.get1();
$scope.performerListSelects = Performer.get();
$scope.albumsListSelects = Albums.get();

$scope.music = {}


      $scope.createMusic = function(file, fileimg) {
        console.log("wow");
console.log($scope.music);
console.log(file);
console.log(fileimg);
      $scope.message = 'Music was created';
          var link = host + 'music/new';
          file.upload = Upload.upload({
            url: link,
            data: {file: file, fileimg: fileimg, _id: $stateParams.id, title: $scope.music.title, performer: $scope.music.performer, visible:$scope.music.visible, date: $scope.music.date,  idGenre:$scope.music.genre, idAlbums:$scope.music.Albums, description:$scope.music.description},
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
