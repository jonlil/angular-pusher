angular-pusher
==============

Wrapper for pusher.com

### Installation

```cli
bower install angular-give-pusher
```

```html
  <script src="/path_to_bower_components/angular/angular.js"></script>
  <script src="/path_to_bower_components/pusher/dist/pusher.js"></script>
  <script src="/path_to_bower_components/angular-give-pusher/lib/angular-give-pusher.js"></script>
```


### Usage

```js
angular.module('testApp', ['give.pusher'])
    .config(['givePusherProvider', function($givePusherProvider) {
        $givePusherProvider.setAppId('your-app-id-goes-here');
        $givePusherProvider.setOptions({
            authEndpoint: 'https://domain.example.com/auth/pusher'
        });
    })

    .controller('testPusher', function($scope, $givePusher) {
        var channel = $givePusher.subscribe('private-test');
        var payload = {};

        channel.trigger('client-update', payload);
        channel.bind('done', function() {

        });

        // good todo if you want dont want connections to be keept open
        $scope.$on('$locationChangeStart', function() {
            channel.unsubscribe(channel);
            channel.unbind('done');
        });
    });
```
