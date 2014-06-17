angular-pusher
==============

Wrapper for pusher.com


```js
  angular.module('myApp', ['give.pusher'])
    .config(function(givePusherProvider) {
      givePusherProvider.setKey('yourpusherkey');
    })
    .controller('chatCtrl', function($scope, givePusher) {
      var channel = givePusher.subscribe('my-channel');
      
      channel.bind('my-event', function(data) {
      
      });
    
      $scope.$on('$locationChangeStart', function() {
        channel.unsubscribe('my-channel');
        channel.unbind('my-event');
      });
    });
```
