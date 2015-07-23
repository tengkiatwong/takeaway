angular.module('starter.services', [])

.factory('Lists', function(){

    var lists = [{
        id:1,
        name: 'Justin Wong',
        location: 'Somerset 313 food court',
        end: '1.00pm',
        deliverBy: '1.20pm',
        premium: '$2',
        profilePic:'img/Justin.png'
    },{
        id:2,
        name: 'Benjamin Ong',
        location: 'One North',
        end:'12.30pm',
        deliverBy: '1.00pm',
        premium: '$4',
        profilePic: 'img/ben.jpg'
    }];
    
    return {
    all: function() {
      return lists;
    },
    remove: function(list) {
      lists.splice(lists.indexOf(list), 1);
    },
    get: function(listId) {
      for (var i = 0; i < lists.length; i++) {
        if (lists[i].id === parseInt(listId)) {
          return lists[i];
        }
      }
      return null;
    }
  };


})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 1,
    name: 'Maxie',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('chatMessages',['$firebase','$rootScope',function($firebase,$rootScope){
    //create a reference to the firebase where we are going to store our data
    var ref = new Firebase("https://blazing-fire-7409.firebaseio.com");
    
    //this uses angularFire to create the synchronized array
    //limit results to 10
    return $firebase(ref.limitToLast(10)).$asArray();
}])

.factory('sellerList',['$firebase','$rootScope',function($firebase,$rootScope){
    //create a reference to the firebase we are going to store out data
    var ref = new Firebase("")
}])






