'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _netChannel = require('../net/channel');

var _eventemitter3 = require('eventemitter3');

var _eventemitter32 = _interopRequireDefault(_eventemitter3);

var ProductService = (function () {
    function ProductService() {
        _classCallCheck(this, ProductService);

        Object.assign(this, _eventemitter32['default'].prototype);
    }

    ProductService.prototype.configureWithContext = function configureWithContext(context) {

        this.getChannel = context.getChannel.bind(context);
        this.getServiceDefaultOptions = context.getServiceDefaultOptions.bind(context);
    };

    ProductService.prototype.getEndpoint = function getEndpoint() {};

    ProductService.prototype.getEventTargets = function getEventTargets() {};

    ProductService.prototype.getUid = function getUid() {

        return this.getEndpoint().join('.').toLowerCase();
    };

    ProductService.prototype._parseMeta = function _parseMeta(data) {

        if (!data) {
            return data;
        }

        data.describe = function (property) {

            var _this = this;

            var res = property.split('.').reduce(function (collector, item) {
                return collector.properties[item];
            }, _this);

            if (res.type == 'object') {
                res.describe = this.describe;
            }

            return res;
        };

        return data;
    };

    ProductService.prototype.getMeta = function getMeta(options) {
        var _this2 = this;

        return this._meta && !options ? Promise.resolve(this._meta) : this.retrieveMeta(options).then(function (res) {
            _this2._meta = _this2._parseMeta(res.meta);
            return _this2._meta;
        });
    };

    ProductService.prototype.retrieveMeta = function retrieveMeta(options) {

        var params = {
            endpoint: this.getEndpoint(),
            queryParams: { meta: 'only' },
            options: options
        };

        return this._request(_netChannel.Channel.METHOD.GET, params, options);
    };

    ProductService.prototype.retrieve = function retrieve(id, queryParams, options) {

        var params = {
            endpoint: this.getEndpoint(),
            objectId: id,
            queryParams: queryParams,
            options: options
        };

        return this._request(_netChannel.Channel.METHOD.GET, params, options);
    };

    ProductService.prototype.retrieveWithAction = function retrieveWithAction(id, action, actionArg, options) {

        var params = {
            endpoint: this.getEndpoint(),
            objectId: id,
            action: action,
            actionArg: actionArg,
            options: options
        };

        return this._request(_netChannel.Channel.METHOD.GET, params, options);
    };

    ProductService.prototype.retrieveList = function retrieveList(queryParams, options) {

        var params = {
            endpoint: this.getEndpoint(),
            queryParams: queryParams,
            options: options
        };

        return this._request(_netChannel.Channel.METHOD.GET, params, options);
    };

    ProductService.prototype.create = function create(data, options, multipart) {

        var params = {
            endpoint: this.getEndpoint(),
            data: data,
            options: options,
            multipart: multipart
        };

        return this._request(_netChannel.Channel.METHOD.CREATE, params, options);
    };

    ProductService.prototype.update = function update(data, options, multipart) {

        var params = {
            endpoint: this.getEndpoint(),
            objectId: data.id,
            data: data,
            options: options,
            multipart: multipart
        };

        return this._request(_netChannel.Channel.METHOD.UPDATE, params, options);
    };

    ProductService.prototype.updateWithAction = function updateWithAction(id, action, actionArg, data, options, multipart) {

        var params = {
            endpoint: this.getEndpoint(),
            objectId: id,
            data: data,
            action: action,
            actionArg: actionArg,
            options: options,
            multipart: multipart
        };

        return this._request(_netChannel.Channel.METHOD.UPDATE, params, options);
    };

    ProductService.prototype.remove = function remove(id, options) {

        var params = {
            endpoint: this.getEndpoint(),
            objectId: id,
            options: options
        };

        return this._request(_netChannel.Channel.METHOD.DELETE, params, options);
    };

    ProductService.prototype.removeWithAction = function removeWithAction(id, action, actionArg, options) {

        var params = {
            endpoint: this.getEndpoint(),
            objectId: id,
            action: action,
            actionArg: actionArg,
            options: options
        };

        return this._request(_netChannel.Channel.METHOD.DELETE, params, options);
    };

    ProductService.prototype.execute = function execute(id, action, actionArg, data, options) {

        var params = {
            endpoint: this.getEndpoint(),
            objectId: id,
            action: action,
            actionArg: actionArg,
            data: data,
            options: options
        };

        return this._request(_netChannel.Channel.METHOD.EXECUTE, params, options);
    };

    ProductService.prototype.executeAppAction = function executeAppAction(appId, action, data, options) {

        var params = {
            appId: appId,
            action: action,
            data: data,
            options: options
        };

        return this._request(_netChannel.Channel.METHOD.EXECUTE, params, options);
    };

    ProductService.prototype._request = function _request(method, params, options) {

        if (options == null) {
            options = this.getServiceDefaultOptions();
        }

        if (params.options == null) {
            params.options = options;
        }

        return this.getChannel(options.channelConfig).request(method, params);
    };

    return ProductService;
})();

exports.ProductService = ProductService;