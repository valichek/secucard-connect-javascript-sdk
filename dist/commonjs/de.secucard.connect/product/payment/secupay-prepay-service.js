'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _productService = require('../product-service');

var SecupayPrepayService = (function (_ProductService) {
    _inherits(SecupayPrepayService, _ProductService);

    function SecupayPrepayService() {
        _classCallCheck(this, SecupayPrepayService);

        _ProductService.call(this);
    }

    SecupayPrepayService.prototype.getEndpoint = function getEndpoint() {
        return ['payment', 'secupayprepays'];
    };

    SecupayPrepayService.prototype.getEventTargets = function getEventTargets() {
        return ['payment.secupayprepays'];
    };

    SecupayPrepayService.prototype.cancel = function cancel(id) {
        return this.execute(id, 'cancel');
    };

    return SecupayPrepayService;
})(_productService.ProductService);

exports.SecupayPrepayService = SecupayPrepayService;

SecupayPrepayService.Uid = ['payment', 'secupayprepays'].join('.');