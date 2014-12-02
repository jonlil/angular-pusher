angular-pusher
==============

Wrapper for pusher.com

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
