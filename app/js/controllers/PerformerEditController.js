angular.module('app')
  .controller('PerformerEditController', ['Performer', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', function (Performer, $stateParams, $scope, $state, Upload, $timeout, host) {

    console.log($stateParams.id);
    $scope.onePerformer = Performer.get1({ action: $stateParams.id });
    console.log($scope.onePerformer);
$scope.performer = {}


      $scope.updatePerformer = function(fileimg) {
        console.log("wow");
        console.log($scope.performer);
console.log(fileimg);
      $scope.message = 'Performer was edit';
          var link = host + 'performer/edit';
          fileimg.upload = Upload.upload({
            url: link,
            data: {fileimg: fileimg, _id: $stateParams.id, title: $scope.performer.title},
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
