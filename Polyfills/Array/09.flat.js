// Polyfill for Array.prototype.flat
Array.prototype.myFlat = function (depth = 1) {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.myFlat called on null or undefined");
  }

  // Convert depth to number and handle edge cases
  const d = Number(depth) || 0;
  if (d < 0) return this;

  // Helper function to flatten array
  const flatten = (arr, currentDepth) => {
    return arr.reduce((acc, val) => {
      if (Array.isArray(val) && currentDepth < d) {
        return acc.concat(flatten(val, currentDepth + 1));
      }
      return acc.concat(val);
    }, []);
  };

  return flatten(this, 0);
};

/*
Usage Examples:

1. Basic Usage:
   const arr = [1, 2, [3, 4]];
   console.log(arr.myFlat()); // [1, 2, 3, 4]

2. With Depth Parameter:
   const arr = [1, 2, [3, 4, [5, 6]]];
   console.log(arr.myFlat(1)); // [1, 2, 3, 4, [5, 6]]
   console.log(arr.myFlat(2)); // [1, 2, 3, 4, 5, 6]

3. With Empty Arrays:
   const arr = [1, 2, [3, 4, []]];
   console.log(arr.myFlat(2)); // [1, 2, 3, 4]

4. With Sparse Arrays:
   const arr = [1, 2, [3, , 4]];
   console.log(arr.myFlat()); // [1, 2, 3, empty, 4]

5. With Different Types:
   const arr = [1, '2', [3, [4, true]]];
   console.log(arr.myFlat(2)); // [1, '2', 3, 4, true]
*/
