# Instructions

## 06-1 : Global namespace

1. Create a file in `src/lessons/global` called `numberInventory.js`.
2. In `numberInventory.js` create a variable called `inventory` and assign it a value of `[]`.
3. In `numberInventory.js` create a function called `addNumberToInventory` that takes a number as an argument and pushes it to the `inventory` array.
4. In `src/lessons/global/index.html` add a script tag before `</body>` with src of `./numberInventory.js`.
5. Open `src/lessons/global/index.html` in your browser and interact with your inventory.
6. Create a file in `src/lessons/global` called `stringInventory.js`.
7. In `stringInventory.js` create a variable called `inventory` and assign it a value of `[]`.
8. In `stringInventory.js` create a function called `addStringToInventory` that takes a string as an argument and pushes it to the `inventory` array.
9. In `src/lessons/global/index.html` add a script tag before `</body>` with src of `./stringInventory.js`.
10. Open `src/lessons/global/index.html` in your browser and interact with your inventory.
11. What's going on here? Why can't we have two inventories?

## 06-2 : Immeditately Invoked Function Expression (IIFE)

```
// IIFE syntax
(function() {
  // code goes here
})();
```

1. Create a file in `src/lessons/iife` called `numberInventory.js`
2. In `numberInventory.js` create an IIFE that defines a variable called `inventory` and assign it a value of `[]`.
3. In the IIFE in `numberInventory.js` define a function called `addNumberToInventory` that takes a number as an argument and pushes it to the `inventory` array.
4. In `src/lessons/iife/index.html` add a script tag before `</body>` to load `numberInventory.js`
5. Open `src/lessons/iife/index.html` in your browser and interact with your inventory.
6. What is the value of `inventory` in the console?
7. In `src/lessons/iife/numberInventory.js` create a binding on the window object `window.addNumberToInventory` and assign it the value of the `addNumberToInventory` function.
8. Open `src/lessons/iife/index.html` in your browser and call your function from the console.
9. Create a file in `src/lessons/iife` called `stringInventory.js`
10. In `stringInventory.js` create an IIFE that defines a variable called `inventory` and assign it a value of `[]`
11. In the IIFE in `stringInventory.js` define a function called `addStringToInventory` that takes a string as an argument and pushes it to the `inventory` array.
12. In `src/lessons/iife/stringInventory.js` create a binding on the window object `window.addStringToInventory` and assign it the value of the `addStringToInventory` function.
13. Open `src/lessons/iife/index.html` in your browser and call your function from the console.
14. What is the value of `inventory` in the console?
15. In `numberInventory.js` create a binding on the window object `window.inventory` and assign it the value of the `inventory` binding.
16. In `stringInventory.js` create a binding on the window object `window.inventory` and assign it the value of the `inventory` binding.
17. Open `src/lessons/iife/index.html` in your browser and inspect the inventory

## 06-3 : CommonJS

1. Duplicate `numberInventory.js` and `stringInventory.js` in `src/lessons/iife` to the `commonjs` directory.
2. Create a file in `src/lessons/commonjs` called `require.js`.
3. Follow the instructions in `require.js` to create a `require` function, and a `cache` object that are available in the global scope.
4. In our inventory scripts, let's set the exports porperty of the cache['pathname'] to an object with properties equal to our interface.
5. In `src/lessons/commonjs/index.html` add a script tag before `</body>` to load all three scripts.
6. Call `require` with the path to our scripts.
7. Open `src/lessons/commonjs/index.html` in your browser and interact with your inventory.

## 06-4 : Modules with import/export

1. Create a file in `src/lessons/module` called `numberInventory.js`
2. In `numberInventory.js` define a variable called `inventory` and assign it a value of `[]`.
3. Use the `export` keyword to export the `inventory` variable.
4. In `src/lessons/module/index.html` add a script tag before `</body>` to load `numberInventory.js`
5. Open `src/lessons/module/index.html` in your browser and try to interact with your inventory.
6. What do you see in the console?
7. add `type="module"` to the script tag in `src/lessons/module/index.html`
8. Open `src/lessons/module/index.html` in your browser and try to interact with your inventory.
9. What do you see in the console?
10. In `src/lessons/module/index.html` add a script tag before `</body>` and use the `import` keyword to import the `inventory` variable from `numberInventory.js`, then log the value of `inventory` to the console.
11. Open `src/lessons/module/index.html` in your browser and try to interact with your inventory.
12. What do you see in the console?
13. Create a file in `src/lessons/module` called `stringInventory.js`
14. In `stringInventory.js` define a variable called `inventory` and assign it a value of `[]`.
15. Use the `export` keyword to export the `inventory` variable.
16. In `src/lessons/module/index.html` add a script tag after `numberInventory.js` but before our import script to load `stringInventory.js`.
17. Import the `inventory` variable from `stringInventory.js` and log the value of `inventory` to the console.
18. Open `src/lessons/module/index.html` in your browser and try to interact with your inventory.
19. What do you see in the console?
20. How can we fix this?
