System.register(['../product-service'], function (_export) {
    'use strict';

    var ProductService, StockService;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_productService) {
            ProductService = _productService.ProductService;
        }],
        execute: function () {
            StockService = (function (_ProductService) {
                _inherits(StockService, _ProductService);

                function StockService() {
                    _classCallCheck(this, StockService);

                    _ProductService.call(this);
                }

                StockService.prototype.getEndpoint = function getEndpoint() {
                    return ['prepaid', 'stocks'];
                };

                StockService.prototype.getEventTargets = function getEventTargets() {
                    return [];
                };

                return StockService;
            })(ProductService);

            _export('StockService', StockService);

            StockService.Uid = ['prepaid', 'stocks'].join('.');
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLnNlY3VjYXJkLmNvbm5lY3QvcHJvZHVjdC9wcmVwYWlkL3N0b2NrLXNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dCQWFhLFlBQVk7Ozs7Ozs7OzZDQUZqQixjQUFjOzs7QUFFVCx3QkFBWTswQkFBWixZQUFZOztBQUVWLHlCQUZGLFlBQVksR0FFUDswQ0FGTCxZQUFZOztBQUdqQiw4Q0FBTyxDQUFBO2lCQUNWOztBQUpRLDRCQUFZLFdBTXJCLFdBQVcsR0FBQSx1QkFBRztBQUNWLDJCQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUNoQzs7QUFSUSw0QkFBWSxXQVVyQixlQUFlLEdBQUEsMkJBQUc7QUFDZCwyQkFBTyxFQUFFLENBQUM7aUJBQ2I7O3VCQVpRLFlBQVk7ZUFBUyxjQUFjOzs7O0FBcUJoRCx3QkFBWSxDQUFDLEdBQUcsR0FBRyxBQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJkZS5zZWN1Y2FyZC5jb25uZWN0L3Byb2R1Y3QvcHJlcGFpZC9zdG9jay1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==