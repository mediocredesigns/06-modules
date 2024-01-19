(function () {
  const inventory = [];

  function addToInventory(number) {
    inventory.push(number);
  }

  function getInventory() {
    return inventory;
  }

  if (typeof require !== "undefined") {
    require.cache["./numberInventory.js"] = {
      exports: {
        addToInventory: addToInventory,
        getInventory: getInventory,
        inventory: inventory,
      },
    };
  }
})();
