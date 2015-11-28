angular.module('app')
  .controller('GenreCreateController', ['Genre', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', function (Genre, $stateParams, $scope, $state, Upload, $timeout, host) {

$scope.genre = {};


      $scope.createGenre = function(fileimg) {
        console.log("wow");
console.log($scope.genre);
console.log(fileimg);
      $scope.message = 'Genre was add';
          var link = host + 'genre/new';
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
