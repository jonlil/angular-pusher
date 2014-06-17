angular-pusher
==============

Wrapper for pusher.com



### Installation

```cli
bower install angular-give-pusher
```

```html
  <script src="/path_to_bower_components/angular-give-pusher/lib/angular-give-pusher.js"></script>
  <script src="/path_to_bower_components/pusher/dist/pusher.js"></script>
```


### Usage

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
