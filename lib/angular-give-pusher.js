(function(window, angular, Pusher, undefined) {
  'use strict';

  // Module global settings.
  var settings = {};

  // Module global flags.
  var flags = {};


  angular.module('give.pusher', [])
    // Declare module settings value
    .value('settings', settings)

    // Declare module flags value
    .value('flags', flags)

    /**
     * Pusher provider
     */
    .provider('givePusher', [function() {

      settings.key = null;

      this.setKey = function(key) {
        settings.key = key;
      };

      this.getKey = function() {
        return settings.key;
      };

      this.$get = [function() {
        return new Pusher(settings.key);
      }]
    }]);

})(window, angular, Pusher);