(function() {
    'use strict';

    var options = {};
    var appId;

    angular.module('give.pusher', [])

    /**
    * Pusher provider
    */
    .provider('givePusher', [function() {

        this.setAppId = function(key) {
            appId = key;
        };

        this.getAppId = function() {
            return appId;
        };

        this.setOptions = function() {
            angular.extend(options, arguments[0]);
        };

        this.$get = [function() {
            return new Pusher(appId, options);
        }]
    }]);

})();
