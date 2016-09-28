(function() {
  'use strict'

  angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.shoppingList = ShoppingListCheckOffService.getShoppingList();
    ctrl.everythingBought = function() { return ShoppingListCheckOffService.everythingBought(); };

    ctrl.buyItem = function($index) {
      ShoppingListCheckOffService.buy($index);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.getBoughtList = function() {
      return ShoppingListCheckOffService.getBoughtList();
    }
    
    ctrl.nothingBought = function() { 
      return ShoppingListCheckOffService.nothingBought(); 
    };

  };

  // I assumed the Hints were optional so i followed a different approach
  function ShoppingListCheckOffService() {
    var service = this;

    service.list = [
      { name: "cookies", quantity: 10, unit: 'bag(s)', bought: false },
      { name: "chips", quantity: 10, unit: 'bag(s)', bought: false },
      { name: "coke", quantity: 10, unit: 'bottle(s)', bought: false },
      { name: "doritos", quantity: 10, unit: 'bag(s)', bought: false },
      { name: "fried fish", quantity: 10, unit: 'unit(s)', bought: false }
    ];

    service.getShoppingList = function() {
      return service.list;
    };

    service.buy = function(i) {
      service.list[i].bought = !service.list[i].bought;
    };

    service.getBoughtList = function() {
      return service.list.filter(function(item) { return item.bought });
    };

    service.everythingBought = function() {
      return service.getBoughtList().length === service.getShoppingList().length;
    };

    service.nothingBought = function() {
      return service.getBoughtList().length == 0;
    }
  };

})();