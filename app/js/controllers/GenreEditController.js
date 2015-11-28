angular.module('app')
  .controller('GenreEditController', ['Genre', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', function (Genre, $stateParams, $scope, $state, Upload, $timeout, host) {

    console.log($stateParams.id);
    $scope.oneGenre = Genre.get1({ action: $stateParams.id });
    console.log($scope.oneGenre);
$scope.genre = {};


      $scope.updateGenre = function(fileimg) {
        console.log("wow");
console.log($scope.genre);
console.log(fileimg);
      $scope.message = 'Genre was edit';
          var link = host + 'genre/edit';
          fileimg.upload = Upload.upload({
            url: link,
            data: {fileimg: fileimg, _id: $stateParams.id, title: $scope.genre.title},
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
