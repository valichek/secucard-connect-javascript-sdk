'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _eventemitter3 = require('eventemitter3');

var _eventemitter32 = _interopRequireDefault(_eventemitter3);

var _channel = require('./channel');

var _stompImplStomp = require('./stomp-impl/stomp');

var _exception = require('./exception');

var _authException = require('../auth/exception');

var utils = {};
utils.really_defined = function (var_to_test) {
	return !(var_to_test == null || var_to_test == undefined);
};

utils.queryToString = function (queryObject) {
	return _qs2['default'].stringify(queryObject);
};

utils.sizeOfUTF8 = function (str) {
	var size = 0;
	if (str) {
		size = encodeURI(str).match(/%..|./g).length;
	}
	return size;
};

var Stomp = (function () {
	function Stomp(SocketImpl) {
		_classCallCheck(this, Stomp);

		Object.assign(this, _eventemitter32['default'].prototype);

		this.connection = null;
		this.messages = {};

		this.skipSessionRefresh = false;
		this.sessionTimer = null;

		this.connectAccessToken = null;

		this.stompCommands = {};
		this.stompCommands[_channel.Channel.METHOD.GET] = 'get';
		this.stompCommands[_channel.Channel.METHOD.CREATE] = 'add';
		this.stompCommands[_channel.Channel.METHOD.EXECUTE] = 'exec';
		this.stompCommands[_channel.Channel.METHOD.UPDATE] = 'update';
		this.stompCommands[_channel.Channel.METHOD.DELETE] = 'delete';

		this.connection = new _stompImplStomp.Stomp(SocketImpl);
		this.connection.on('message', this._handleStompMessage.bind(this));
	}

	Stomp.prototype.configureWithContext = function configureWithContext(context) {

		this.emitServiceEvent = context.emitServiceEvent.bind(context);

		this.getToken = function () {
			return context.getAuth().getToken();
		};

		this.getStompHost = function () {
			return context.getConfig().getStompHost();
		};

		this.getStompPort = function () {
			return context.getConfig().getStompPort();
		};

		this.getStompSslEnabled = function () {
			return context.getConfig().getStompSslEnabled();
		};

		this.getStompVHost = function () {
			return context.getConfig().getStompVHost();
		};

		this.getStompQueue = function () {
			return context.getConfig().getStompQueue();
		};

		this.getStompDestination = function () {
			return context.getConfig().getStompDestination();
		};

		this.getStompEndpoint = function () {
			return context.getConfig().getStompEndpoint();
		};

		this.isDevice = function () {
			return context.getConfig().isDevice();
		};

		this.getStompHeartbeatMs = function () {
			return context.getConfig().getStompHeartbeatMs();
		};
	};

	Stomp.prototype.getStompConfig = function getStompConfig() {

		return {

			host: this.getStompHost(),
			port: this.getStompPort(),
			ssl: this.getStompSslEnabled(),
			vhost: this.getStompVHost(),
			heartbeatMs: this.getStompHeartbeatMs(),
			endpoint: this.getStompEndpoint(),
			login: '',
			passcode: ''
		};
	};

	Stomp.prototype.open = function open() {
		var _this = this;

		return this.getToken().then(function (token) {

			if (token && token.refresh_token) {
				return _this._startSessionRefresh();
			} else if (token) {
				return _this._disconnect().then(function () {
					return _this._connect(token.access_token);
				});
			}
		});
	};

	Stomp.prototype.connect = function connect() {
		var _this2 = this;

		console.log('stomp start connection');

		return this.getToken().then(function (token) {

			console.log('Got token', token);
			return _this2._connect(token.access_token);
		});
	};

	Stomp.prototype.close = function close() {

		if (this.sessionTimer) {
			clearInterval(this.sessionTimer);
		}

		return this._disconnect();
	};

	Stomp.prototype._disconnect = function _disconnect() {
		var _this3 = this;

		return new Promise(function (resolve, reject) {

			if (!_this3.connection.isConnected()) {
				resolve();
				return;
			}

			if (_this3.connection && _this3.connection.disconnect) {
				_this3.connection.disconnect();
			}

			_this3._stompOnDisconnected = function () {
				console.log('stomp disconnected');
				_this3.connection.removeListener('connected', _this3._stompOnDisconnected);
				delete _this3._stompOnDisconnected;
				resolve();
			};

			_this3.connection.on('disconnected', _this3._stompOnDisconnected);
		});
	};

	Stomp.prototype.request = function request(method, params) {

		var destination = this.buildDestination(method, params);
		var message = this.createMessage(params);
		return this._sendMessage(destination, message)['catch'](function (err) {
			err.request = JSON.stringify({ method: method, params: params });
			throw err;
		});
	};

	Stomp.prototype.buildDestination = function buildDestination(method, params) {

		var destination = {};

		if (params.endpoint != null) {
			destination.endpoint = params.endpoint;
		} else if (params.appId != null) {
			destination.appId = params.appId;
		} else {
			throw new Error('Missing object spec or app id');
		}

		destination.command = this.stompCommands[method];

		if (!destination.command) {
			throw new Error('Invalid method arg');
		}

		destination.action = params.action;

		return destination;
	};

	Stomp.prototype.createMessage = function createMessage(params) {

		var message = {};

		if (utils.really_defined(params.objectId)) {
			message.pid = params.objectId;
		}

		if (utils.really_defined(params.actionArg)) {
			message.sid = params.actionArg;
		}

		if (utils.really_defined(params.queryParams)) {
			message.query = utils.queryToString(params.queryParams);
		}

		if (utils.really_defined(params.data)) {
			message.data = params.data;
		}

		return message;
	};

	Stomp.prototype._connect = function _connect(accessToken) {
		var _this4 = this;

		this.connectAccessToken = accessToken;

		var stompCredentials = {
			login: accessToken,
			passcode: accessToken
		};

		this.connection.configure(this.getStompConfig());
		this.connection.connect(stompCredentials);

		return new Promise(function (resolve, reject) {

			_this4._stompOnConnected = function () {
				console.log('stomp connected');
				_this4._stompClearListeners();
				resolve(true);
			};

			_this4._stompOnError = function (message) {
				console.log('stomp error', message);
				_this4._stompClearListeners();
				if (message.headers && message.headers.message == 'Bad CONNECT') {
					reject(new _authException.AuthenticationFailedException(message.body[0]));
				} else {
					reject(message);
				}
			};

			_this4._stompClearListeners = function () {
				_this4.connection.removeListener('connected', _this4._stompOnConnected);
				_this4.connection.removeListener('error', _this4._stompOnError);
				delete _this4._stompOnConnected;
				delete _this4._stompOnError;
				delete _this4._stompClearListeners;
			};

			_this4.connection.on('connected', _this4._stompOnConnected);
			_this4.connection.on('error', _this4._stompOnError);
		});
	};

	Stomp.prototype._sendMessage = function _sendMessage(destinationObj, message) {
		var _this5 = this;

		console.log('_sendMessage', destinationObj, message);

		return this.getToken().then(function (token) {

			var accessToken = token.access_token;
			var correlationId = _this5.createCorrelationId();

			var headers = {};
			headers['reply-to'] = _this5.getStompQueue();
			headers['content-type'] = 'application/json';
			headers['user-id'] = accessToken;
			headers['correlation-id'] = correlationId;

			if (destinationObj.appId) {
				headers['app-id'] = destinationObj.appId;
			}

			var body = JSON.stringify(message);
			headers['content-length'] = utils.sizeOfUTF8(body);

			var destination = _this5.getStompDestination();
			if (destinationObj.appId) {

				destination += 'app:' + destinationObj.action;
			} else {

				destination += 'api:' + destinationObj.command + ':';

				var endpoint = [];
				if (destinationObj.endpoint) {
					endpoint = endpoint.concat(destinationObj.endpoint);
				}
				if (destinationObj.action) {
					endpoint.push(destinationObj.action);
				}

				destination += endpoint.join('.');
			}

			var sendWithStomp = function sendWithStomp() {

				return new Promise(function (resolve, reject) {

					_this5.messages[correlationId] = { resolve: resolve, reject: reject };
					_this5.connection.send(destination, headers, body);
				});
			};

			if (!_this5.connection.isConnected() || token && token.access_token != _this5.connectAccessToken) {

				if (_this5.connection.isConnected()) {
					console.log('Reconnect due token change.');
				}

				return _this5._disconnect().then(function () {

					return _this5._connect(accessToken).then(sendWithStomp);
				});
			}

			return sendWithStomp();
		});
	};

	Stomp.prototype._startSessionRefresh = function _startSessionRefresh() {
		var _this6 = this;

		console.log('Stomp session refresh loop started');
		var initial = true;

		var sessionInterval = this.getStompHeartbeatMs() > 0 ? this.getStompHeartbeatMs() - 500 : 25 * 1000;

		this.sessionTimer = setInterval(function () {

			if (_this6.skipSessionRefresh) {
				_this6.skipSessionRefresh = false;
			} else {
				_this6._runSessionRefresh(false);
			}
		}, sessionInterval);

		return this._runSessionRefresh(initial);
	};

	Stomp.prototype._runSessionRefresh = function _runSessionRefresh(initial) {
		var _this7 = this;

		return this.request(_channel.Channel.METHOD.EXECUTE, {
			endpoint: ['auth', 'sessions'],
			objectId: 'me',
			action: 'refresh'
		}).then(function (res) {

			_this7.emit('sessionRefresh');
			console.log('Session refresh sent');
			_this7.skipSessionRefresh = false;
			return res;
		})['catch'](function (err) {

			_this7.emit('sessionRefreshError');
			console.log('Session refresh failed');
			if (initial) {
				throw err;
			}
		});
	};

	Stomp.prototype._handleStompMessage = function _handleStompMessage(frame) {
		this.skipSessionRefresh = true;

		console.log('_handleStompMessage', frame);
		var body = undefined;

		if (frame && frame.headers && frame.headers['correlation-id']) {

			var correlationId = frame.headers['correlation-id'];
			body = JSON.parse(frame.body[0]);

			if (body.status == 'ok') {
				this.messages[correlationId].resolve(body.data);
			} else {
				var error = _exception.SecucardConnectException.create(body);
				this.messages[correlationId].reject(error);
			}

			delete this.messages[correlationId];
		} else if (frame) {

			body = JSON.parse(frame.body[0]);
			this.emitServiceEvent(null, body.target, body.type, body.data);
		}
	};

	Stomp.prototype.createCorrelationId = function createCorrelationId() {
		return _uuid2['default'].v1();
	};

	return Stomp;
})();

exports.Stomp = Stomp;