System.register(['./contract-service', './item-group-service', './item-service', './sale-service', './stock-service'], function (_export) {
  'use strict';

  var ContractService, ItemGroupService, ItemService, SaleService, StockService, Prepaid;
  return {
    setters: [function (_contractService) {
      ContractService = _contractService.ContractService;
    }, function (_itemGroupService) {
      ItemGroupService = _itemGroupService.ItemGroupService;
    }, function (_itemService) {
      ItemService = _itemService.ItemService;
    }, function (_saleService) {
      SaleService = _saleService.SaleService;
    }, function (_stockService) {
      StockService = _stockService.StockService;
    }],
    execute: function () {
      Prepaid = {};

      _export('Prepaid', Prepaid);

      Prepaid.ContractService = ContractService;
      Prepaid.ItemGroupService = ItemGroupService;
      Prepaid.ItemService = ItemService;
      Prepaid.SaleService = SaleService;
      Prepaid.StockService = StockService;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLnNlY3VjYXJkLmNvbm5lY3QvcHJvZHVjdC9wcmVwYWlkL3ByZXBhaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lGQWlCYSxPQUFPOzs7eUNBTlosZUFBZTs7MkNBQ2YsZ0JBQWdCOztpQ0FDaEIsV0FBVzs7aUNBQ1gsV0FBVzs7bUNBQ1gsWUFBWTs7O0FBRVAsYUFBTyxHQUFHLEVBQUU7Ozs7QUFDekIsYUFBTyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDMUMsYUFBTyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQzVDLGFBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQ2xDLGFBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQ2xDLGFBQU8sQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDIiwiZmlsZSI6ImRlLnNlY3VjYXJkLmNvbm5lY3QvcHJvZHVjdC9wcmVwYWlkL3ByZXBhaWQuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9