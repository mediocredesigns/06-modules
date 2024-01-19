/**
 * We want to be able to require modules in our code, but we need a way to do that.
 * Let's expect the window to have an object named require that looks like this:
 *
 * require: {
 *   cache: {
 *     // Each key in the cache object represents a module path, in this case: './numberInventory.js'
 *     // The corresponding value is an object representing the module, structured as follows:
 *     'path': {
 *       exports: {
 *         // Exported values/functions from the module go here.
 *         // This might also be called our module interface, or public API!
 *       }
 *     },
 *     // ... other modules
 *   }
 * }
 */

// Define a function named require that takes a module path as an argument
function require(path) {
  // Check if the module is in the cache
  // If no, throw an error
  // If yes, return the module's exports object
  if (!require.cache[path]) {
    throw new Error("Module not found: " + path);
  }
  return require.cache[path].exports;
}

// Set the cache property on the require function to an empty object
require.cache = {};

// Expose the require function globally
window.require = require;
