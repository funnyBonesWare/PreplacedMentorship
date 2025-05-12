// Polyfill for Array.prototype.reverse
Array.prototype.myReverse = function () {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError(
      "Array.prototype.myReverse called on null or undefined"
    );
  }

  const len = this.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    const j = len - 1 - i;
    // Swap elements using destructuring
    [this[i], this[j]] = [this[j], this[i]];
  }

  return this;
};

/*
Usage Examples:

1. Basic Usage:
   const arr = [1, 2, 3, 4, 5];
   console.log(arr.myReverse()); // [5, 4, 3, 2, 1]
   console.log(arr); // [5, 4, 3, 2, 1] (original array is modified)

2. With Empty Array:
   const arr = [];
   console.log(arr.myReverse()); // []

3. With Single Element:
   const arr = [1];
   console.log(arr.myReverse()); // [1]

4. With Different Types:
   const arr = [1, '2', true, {x: 1}];
   console.log(arr.myReverse()); // [{x: 1}, true, '2', 1]

5. With Sparse Arrays:
   const arr = [1, , 3, , 5];
   console.log(arr.myReverse()); // [5, empty, 3, empty, 1]
*/
