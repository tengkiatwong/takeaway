angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Lists) {

$scope.lists = Lists.all();
    $scope.remove = function(chat) {
    Lists.remove(list);
  }
})

.controller('ChatsCtrl', function($scope,Lists,chatMessages) {
    
    $scope.lastMessage = chatMessages;
    console.log(($scope.lastMessage));
    
    $scope.lists = Lists.all();
    $scope.remove = function(list){
        Lists.remove(list);
    }
    
})

.controller('ChatDetailCtrl', function($scope, $stateParams,Lists,chatMessages) {
    $scope.list = Lists.get($stateParams.listId);
    //set scope.messages to chatMessages factory which returns firebase data
    $scope.messages = chatMessages;
    //initialize message object
    $scope.message = {};
    //add new message to firebase
    $scope.addMessage = function(message){
        $scope.messages.$add({content: message});
        //reset text input field to empty string
        $scope.message.theMessage = "";
    };
})

.controller('AccountCtrl', function($scope) {
    $scope.premium=2
})


