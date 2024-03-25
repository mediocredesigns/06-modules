(function () {
	const inventory = [];
	function addNumberToInventory(num) {
		inventory.push(num);
	}

	console.log("Hi");
	window.addNumberToInventory = addNumberToInventory;
})();
