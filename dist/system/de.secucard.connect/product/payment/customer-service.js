System.register(['../product-service'], function (_export) {
  'use strict';

  var ProductService, CustomerService;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_productService) {
      ProductService = _productService.ProductService;
    }],
    execute: function () {
      CustomerService = (function (_ProductService) {
        _inherits(CustomerService, _ProductService);

        function CustomerService() {
          _classCallCheck(this, CustomerService);

          _ProductService.call(this);
        }

        CustomerService.prototype.getEndpoint = function getEndpoint() {
          return ['payment', 'customers'];
        };

        CustomerService.prototype.getEventTargets = function getEventTargets() {
          return [];
        };

        return CustomerService;
      })(ProductService);

      _export('CustomerService', CustomerService);

      CustomerService.Uid = ['payment', 'customers'].join('.');
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLnNlY3VjYXJkLmNvbm5lY3QvcHJvZHVjdC9wYXltZW50L2N1c3RvbWVyLXNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUVhLGVBQWU7Ozs7Ozs7O3VDQUZwQixjQUFjOzs7QUFFVCxxQkFBZTtrQkFBZixlQUFlOztBQUVmLGlCQUZBLGVBQWUsR0FFWjtnQ0FGSCxlQUFlOztBQUd4QixvQ0FBTyxDQUFDO1NBQ1Q7O0FBSlUsdUJBQWUsV0FNMUIsV0FBVyxHQUFBLHVCQUFHO0FBQ1osaUJBQU8sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDakM7O0FBUlUsdUJBQWUsV0FVMUIsZUFBZSxHQUFBLDJCQUFHO0FBQ2hCLGlCQUFPLEVBQUUsQ0FBQztTQUNYOztlQVpVLGVBQWU7U0FBUyxjQUFjOzs7O0FBZ0JuRCxxQkFBZSxDQUFDLEdBQUcsR0FBRyxBQUFDLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJkZS5zZWN1Y2FyZC5jb25uZWN0L3Byb2R1Y3QvcGF5bWVudC9jdXN0b21lci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==
