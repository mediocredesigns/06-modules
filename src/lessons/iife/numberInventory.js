(function () {
  const inventory = [];

  function addToInventory(number) {
    inventory.push(number);
  }

  function getInventory() {
    return inventory;
  }

  window.addToInventory = addToInventory;
  window.getInventory = getInventory;
})();
