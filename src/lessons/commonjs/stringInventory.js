(function () {
  const inventory = [];

  function addToInventory(str) {
    inventory.push(str);
  }

  function getInventory() {
    return inventory;
  }

  if (typeof require !== "undefined") {
    require.cache["./stringInventory.js"] = {
      exports: {
        addToInventory: addToInventory,
        getInventory: getInventory,
        inventory: inventory,
      },
    };
  }
})();
