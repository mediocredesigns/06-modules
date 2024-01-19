(function () {
  const inventory = [];

  function addToInventory(str) {
    inventory.push(str);
  }

  function getInventory() {
    return inventory;
  }

  window.addToInventory = addToInventory;
  window.getInventory = getInventory;
})();
