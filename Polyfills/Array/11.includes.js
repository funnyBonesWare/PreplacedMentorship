// Polyfill for Array.prototype.includes
Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError(
      "Array.prototype.myIncludes called on null or undefined"
    );
  }

  // Convert fromIndex to number and handle edge cases
  let n = Number(fromIndex) || 0;
  if (Math.abs(n) === Infinity) {
    n = 0;
  }
  if (n < 0) {
    n = Math.max(this.length + n, 0);
  }

  // Handle NaN case specially
  if (Number.isNaN(searchElement)) {
    for (let i = n; i < this.length; i++) {
      if (Number.isNaN(this[i])) {
        return true;
      }
    }
    return false;
  }

  // Regular search
  for (let i = n; i < this.length; i++) {
    if (this[i] === searchElement) {
      return true;
    }
  }

  return false;
};

/*
Usage Examples:

1. Basic Usage:
   const arr = [1, 2, 3];
   console.log(arr.myIncludes(2)); // true
   console.log(arr.myIncludes(4)); // false

2. With fromIndex:
   const arr = [1, 2, 3];
   console.log(arr.myIncludes(2, 2)); // false
   console.log(arr.myIncludes(2, 1)); // true

3. With Negative fromIndex:
   const arr = [1, 2, 3];
   console.log(arr.myIncludes(2, -2)); // true
   console.log(arr.myIncludes(1, -2)); // false

4. With NaN:
   const arr = [1, NaN, 3];
   console.log(arr.myIncludes(NaN)); // true
   console.log(arr.myIncludes(Number.NaN)); // true

5. With Different Types:
   const arr = [1, '2', {x: 3}];
   console.log(arr.myIncludes('2')); // true
   console.log(arr.myIncludes(2)); // false
   console.log(arr.myIncludes({x: 3})); // false (objects are compared by reference)
*/
