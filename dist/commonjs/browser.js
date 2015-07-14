'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _es6Shim = require('es6-shim');

var _es6Shim2 = _interopRequireDefault(_es6Shim);

var _deSecucardConnectClientBrowserEnvironment = require('./de.secucard.connect/client-browser-environment');

var _deSecucardConnectClient = require('./de.secucard.connect/client');

var SecucardConnect = {
	description: 'SecucardConnect for browser'
};
exports.SecucardConnect = SecucardConnect;
SecucardConnect.create = function (config) {

	return _deSecucardConnectClient.Client.create(_deSecucardConnectClientBrowserEnvironment.ClientBrowserEnvironment, config);
};