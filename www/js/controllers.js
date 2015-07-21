angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Lists) {

$scope.lists = Lists.all();
    $scope.remove = function(chat) {
    Lists.remove(list);
  }
})

.controller('ChatsCtrl', function($scope,Lists) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
    $scope.lists = Lists.all();
    
    $scope.remove = function(list){
        Lists.remove(list);
    }
    
})

.controller('ChatDetailCtrl', function($scope, $stateParams,Lists) {
  $scope.list = Lists.get($stateParams.listId);

})

.controller('AccountCtrl', function($scope) {
    $scope.premium=2
});
