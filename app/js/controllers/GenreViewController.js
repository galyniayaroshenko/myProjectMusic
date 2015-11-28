angular.module('app')
  .controller('GenreViewController', ['$scope','$stateParams', 'Genre', function($scope, $stateParams, Genre) {
    console.log($stateParams.id);
    $scope.viewGenre = Genre.get({ action: $stateParams.id });
    console.log($scope.genre);
  }]);
