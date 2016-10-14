System.register(['../product-service'], function (_export) {
    'use strict';

    var ProductService, BeaconService;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    return {
        setters: [function (_productService) {
            ProductService = _productService.ProductService;
        }],
        execute: function () {
            BeaconService = (function (_ProductService) {
                function BeaconService() {
                    _classCallCheck(this, BeaconService);

                    _ProductService.call(this);
                }

                _inherits(BeaconService, _ProductService);

                BeaconService.prototype.getEndpoint = function getEndpoint() {
                    return ['loyalty', 'beacons'];
                };

                BeaconService.prototype.getEventTargets = function getEventTargets() {
                    return [];
                };

                return BeaconService;
            })(ProductService);

            _export('BeaconService', BeaconService);

            BeaconService.Uid = ['loyalty', 'beacons'].join('.');
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLnNlY3VjYXJkLmNvbm5lY3QvcHJvZHVjdC9sb3lhbHR5L2JlYWNvbi1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3QkFhYSxhQUFhOzs7Ozs7Ozs2Q0FGbEIsY0FBYzs7O0FBRVQseUJBQWE7QUFFWCx5QkFGRixhQUFhLEdBRVI7MENBRkwsYUFBYTs7QUFHbEIsOENBQU8sQ0FBQTtpQkFDVjs7MEJBSlEsYUFBYTs7QUFBYiw2QkFBYSxXQU10QixXQUFXLEdBQUEsdUJBQUc7QUFDViwyQkFBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztpQkFDakM7O0FBUlEsNkJBQWEsV0FVdEIsZUFBZSxHQUFBLDJCQUFHO0FBQ2QsMkJBQU8sRUFBRSxDQUFDO2lCQUNiOzt1QkFaUSxhQUFhO2VBQVMsY0FBYzs7cUNBQXBDLGFBQWE7O0FBZ0IxQix5QkFBYSxDQUFDLEdBQUcsR0FBRyxBQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJkZS5zZWN1Y2FyZC5jb25uZWN0L3Byb2R1Y3QvbG95YWx0eS9iZWFjb24tc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=