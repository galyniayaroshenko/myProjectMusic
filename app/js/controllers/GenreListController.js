angular.module('app')
.controller('GenreListController', ['$scope', '$state', '$window', 'Genre', function($scope, $state, $window, Genre) {
  $scope.genreList = Genre.get();


  $scope.deleteGenre = function (arg) {
    $scope.arg = arg;
    Genre.delete({ action: $scope.arg.id }, function () {
      $scope.genreList = Genre.get();
    });
  };

}]);
