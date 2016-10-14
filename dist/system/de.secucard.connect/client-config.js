System.register([], function (_export) {
    'use strict';

    var ClientConfig;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            ClientConfig = (function () {
                function ClientConfig() {
                    _classCallCheck(this, ClientConfig);
                }

                ClientConfig.prototype.getOAuthUrl = function getOAuthUrl() {
                    return this._getCompleteUrl(this.oAuthUrl);
                };

                ClientConfig.prototype.getRestUrl = function getRestUrl() {
                    return this._getCompleteUrl(this.restUrl);
                };

                ClientConfig.prototype.getStompHost = function getStompHost() {
                    var value = this.stompHost;
                    if (value.endsWith('/')) {
                        value = value.slice(0, value.length - 1);
                    }
                    return value;
                };

                ClientConfig.prototype.getStompPort = function getStompPort() {
                    return this.stompPort;
                };

                ClientConfig.prototype.getStompSslEnabled = function getStompSslEnabled() {
                    return this.stompSslEnabled;
                };

                ClientConfig.prototype.getStompVHost = function getStompVHost() {
                    return this.stompVHost;
                };

                ClientConfig.prototype.getStompQueue = function getStompQueue() {
                    return this.stompQueue;
                };

                ClientConfig.prototype.getStompDestination = function getStompDestination() {
                    return this._getCompleteUrl(this.stompDestination);
                };

                ClientConfig.prototype.getStompEndpoint = function getStompEndpoint() {
                    return this.stompEndpoint;
                };

                ClientConfig.prototype.getStompHeartbeatMs = function getStompHeartbeatMs() {
                    return this.stompHeartbeatSec * 1000;
                };

                ClientConfig.prototype.isDevice = function isDevice() {

                    return Boolean(this.deviceUUID);
                };

                ClientConfig.prototype.getDeviceUUID = function getDeviceUUID() {
                    return this.deviceUUID;
                };

                ClientConfig.prototype.getRetrieveToken = function getRetrieveToken() {
                    return this.retrieveToken;
                };

                ClientConfig.prototype._getCompleteUrl = function _getCompleteUrl(value) {

                    var url = value;
                    if (!url.endsWith('/')) {
                        url += '/';
                    }
                    return url;
                };

                return ClientConfig;
            })();

            _export('ClientConfig', ClientConfig);

            ClientConfig._defaults = {
                channelDefault: '',
                cacheDir: '',
                deviceUUID: null,

                oAuthUrl: 'https://connect.secucard.com/oauth/',

                authDeviceTimeout: 0,
                restUrl: 'https://connect.secucard.com/api/v2/',

                restTimeout: 0,
                stompEnabled: true,

                stompHeartbeatSec: 30,

                stompHost: 'connect.secucard.com',
                stompPort: 61614,
                stompVHost: null,
                stompEndpoint: '',
                stompDestination: '/exchange/connect.api',

                stompSslEnabled: true,

                stompQueue: '/temp-queue/main',

                stompConnectTimeoutSec: 0,
                stompMessageTimeoutSec: 0,
                stompMessageAge: 0,
                retrieveToken: null
            };

            ClientConfig.defaults = function () {

                var config = new ClientConfig();
                Object.assign(config, ClientConfig._defaults);
                return config;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLnNlY3VjYXJkLmNvbm5lY3QvY2xpZW50LWNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFXYSxZQUFZOzs7Ozs7O0FBQVosd0JBQVk7QUFFVix5QkFGRixZQUFZLEdBRVA7MENBRkwsWUFBWTtpQkFJcEI7O0FBSlEsNEJBQVksV0FNckIsV0FBVyxHQUFBLHVCQUFHO0FBQ1YsMkJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlDOztBQVJRLDRCQUFZLFdBVXJCLFVBQVUsR0FBQSxzQkFBRztBQUNULDJCQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM3Qzs7QUFaUSw0QkFBWSxXQWNyQixZQUFZLEdBQUEsd0JBQUc7QUFDWCx3QkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMzQix3QkFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3JCLDZCQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDNUM7QUFDRCwyQkFBTyxLQUFLLENBQUM7aUJBQ2hCOztBQXBCUSw0QkFBWSxXQXNCckIsWUFBWSxHQUFBLHdCQUFHO0FBQ1gsMkJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDekI7O0FBeEJRLDRCQUFZLFdBMEJyQixrQkFBa0IsR0FBQSw4QkFBRztBQUNqQiwyQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUMvQjs7QUE1QlEsNEJBQVksV0E4QnJCLGFBQWEsR0FBQSx5QkFBRztBQUNaLDJCQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQzFCOztBQWhDUSw0QkFBWSxXQWtDckIsYUFBYSxHQUFBLHlCQUFHO0FBQ1osMkJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDMUI7O0FBcENRLDRCQUFZLFdBc0NyQixtQkFBbUIsR0FBQSwrQkFBRztBQUNsQiwyQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUN0RDs7QUF4Q1EsNEJBQVksV0EwQ3JCLGdCQUFnQixHQUFBLDRCQUFHO0FBQ2YsMkJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztpQkFDN0I7O0FBNUNRLDRCQUFZLFdBOENyQixtQkFBbUIsR0FBQSwrQkFBRztBQUNsQiwyQkFBTyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2lCQUN4Qzs7QUFoRFEsNEJBQVksV0FrRHJCLFFBQVEsR0FBQSxvQkFBRzs7QUFFUCwyQkFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUVuQzs7QUF0RFEsNEJBQVksV0F3RHJCLGFBQWEsR0FBQSx5QkFBRztBQUNaLDJCQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQzFCOztBQTFEUSw0QkFBWSxXQTREckIsZ0JBQWdCLEdBQUEsNEJBQUc7QUFDZiwyQkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUM3Qjs7QUE5RFEsNEJBQVksV0FnRXJCLGVBQWUsR0FBQSx5QkFBQyxLQUFLLEVBQUU7O0FBRW5CLHdCQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDaEIsd0JBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3BCLDJCQUFHLElBQUksR0FBRyxDQUFDO3FCQUNkO0FBQ0QsMkJBQU8sR0FBRyxDQUFDO2lCQUVkOzt1QkF4RVEsWUFBWTs7O29DQUFaLFlBQVk7O0FBNEV6Qix3QkFBWSxDQUFDLFNBQVMsR0FBRztBQUdyQiw4QkFBYyxFQUFFLEVBQUU7QUFHbEIsd0JBQVEsRUFBRSxFQUFFO0FBR1osMEJBQVUsRUFBRSxJQUFJOztBQUdoQix3QkFBUSxFQUFFLHFDQUFxQzs7QUFFL0MsaUNBQWlCLEVBQUUsQ0FBQztBQUdwQix1QkFBTyxFQUFFLHNDQUFzQzs7QUFFL0MsMkJBQVcsRUFBRSxDQUFDO0FBR2QsNEJBQVksRUFBRSxJQUFJOztBQUVsQixpQ0FBaUIsRUFBRSxFQUFFOztBQUVyQix5QkFBUyxFQUFFLHNCQUFzQjtBQUNqQyx5QkFBUyxFQUFFLEtBQUs7QUFDaEIsMEJBQVUsRUFBRSxJQUFJO0FBQ2hCLDZCQUFhLEVBQUUsRUFBRTtBQUVqQixnQ0FBZ0IsRUFBRSx1QkFBdUI7O0FBRXpDLCtCQUFlLEVBQUUsSUFBSTs7QUFHckIsMEJBQVUsRUFBRSxrQkFBa0I7O0FBRzlCLHNDQUFzQixFQUFFLENBQUM7QUFFekIsc0NBQXNCLEVBQUUsQ0FBQztBQU16QiwrQkFBZSxFQUFFLENBQUM7QUFHbEIsNkJBQWEsRUFBRSxJQUFJO2FBQ3RCLENBQUM7O0FBRUYsd0JBQVksQ0FBQyxRQUFRLEdBQUcsWUFBTTs7QUFFMUIsb0JBQUksTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDaEMsc0JBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5Qyx1QkFBTyxNQUFNLENBQUM7YUFFakIsQ0FBQyIsImZpbGUiOiJkZS5zZWN1Y2FyZC5jb25uZWN0L2NsaWVudC1jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9