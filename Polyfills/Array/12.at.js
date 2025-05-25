// Polyfill for Array.prototype.at
Array.prototype.myAt = function (index) {
  // Step 1: Make sure we have a valid array
  if (this === null || this === undefined) {
    throw new TypeError("Cannot use at() on null or undefined");
  }

  // Step 2: Convert the index to a whole number
  // First, try to convert the input to a number
  let numberIndex = Number(index);
  
  // If the conversion failed (NaN), use 0 instead
  if (isNaN(numberIndex)) {
    numberIndex = 0;
  }
  
  // Remove any decimal part (like 2.7 becomes 2)
  numberIndex = Math.floor(numberIndex);

  // Step 3: Handle negative numbers
  // If the index is negative, count from the end
  if (numberIndex < 0) {
    // Example: For array [1,2,3,4,5]
    // If index is -1, we want the last element (5)
    // If index is -2, we want the second last element (4)
    let positionFromEnd = this.length + numberIndex;
    return this[positionFromEnd];
  }

  // Step 4: Return the element at the position
  return this[numberIndex];
};

/*
Usage Examples:

1. Basic Usage:
   const numbers = [1, 2, 3, 4, 5];
   
   // Get first element (index 0)
   console.log(numbers.myAt(0)); // 1
   
   // Get third element (index 2)
   console.log(numbers.myAt(2)); // 3
   
   // Get last element (index -1)
   console.log(numbers.myAt(-1)); // 5

2. What happens with invalid positions:
   const smallArray = [1, 2, 3];
   
   // Try to get element beyond array length
   console.log(smallArray.myAt(5)); // undefined
   
   // Try to get element before start of array
   console.log(smallArray.myAt(-5)); // undefined

3. Working with different types of data:
   const mixedArray = ['apple', 'banana', {fruit: 'orange'}];
   
   // Get the object
   console.log(mixedArray.myAt(2)); // {fruit: 'orange'}
   
   // Get second last element
   console.log(mixedArray.myAt(-2)); // 'banana'

4. Working with arrays that have gaps:
   const sparseArray = [1, , 3]; // Note the empty space
   
   // Try to get the empty space
   console.log(sparseArray.myAt(1)); // undefined
   
   // Try to get second last element
   console.log(sparseArray.myAt(-2)); // undefined

5. Working with decimal numbers:
   const array = [1, 2, 3, 4, 5];
   
   // Decimal numbers are rounded down
   console.log(array.myAt(2.7)); // 3 (2.7 becomes 2)
   
   // Negative decimals work too
   console.log(array.myAt(-2.3)); // 4 (-2.3 becomes -2)
*/
