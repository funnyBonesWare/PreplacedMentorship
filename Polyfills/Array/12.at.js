// Polyfill for Array.prototype.at
Array.prototype.myAt = function (index) {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.myAt called on null or undefined");
  }

  // Convert index to integer
  const n = Math.trunc(Number(index)) || 0;

  // Handle negative indices
  const len = this.length;
  if (n < 0) {
    return this[len + n];
  }

  // Handle positive indices
  return this[n];
};

/*
Usage Examples:

1. Basic Usage:
   const arr = [1, 2, 3, 4, 5];
   console.log(arr.myAt(0)); // 1
   console.log(arr.myAt(2)); // 3
   console.log(arr.myAt(-1)); // 5

2. With Out of Bounds:
   const arr = [1, 2, 3];
   console.log(arr.myAt(5)); // undefined
   console.log(arr.myAt(-5)); // undefined

3. With Different Types:
   const arr = ['a', 'b', 'c', {x: 1}];
   console.log(arr.myAt(3)); // {x: 1}
   console.log(arr.myAt(-2)); // 'c'

4. With Sparse Arrays:
   const arr = [1, , 3];
   console.log(arr.myAt(1)); // undefined
   console.log(arr.myAt(-2)); // undefined

5. With Non-Integer Indices:
   const arr = [1, 2, 3, 4, 5];
   console.log(arr.myAt(2.7)); // 3 (truncates to 2)
   console.log(arr.myAt(-2.3)); // 4 (truncates to -2)
*/
