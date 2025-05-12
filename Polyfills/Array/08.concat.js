Array.prototype.myConcat = function (...args) {
  // Create a new array to store the result
  const result = [];

  // First, copy all elements from the original array
  for (let i = 0; i < this.length; i++) {
    // Handle sparse arrays by checking if the index exists
    if (Object.hasOwn(this, i)) {
      result.push(this[i]);
    }
  }

  // Then, process each argument
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    // If the argument is an array, spread its elements
    if (Array.isArray(arg)) {
      for (let j = 0; j < arg.length; j++) {
        // Handle sparse arrays
        if (Object.hasOwn(arg, j)) {
          result.push(arg[j]);
        }
      }
    } else {
      // If the argument is not an array, add it as is
      result.push(arg);
    }
  }

  return result;
};

/*
Understanding the concat Implementation:

1. Key Features:
   - Creates a new array
   - Preserves original arrays
   - Handles multiple arguments
   - Flattens array arguments one level
   - Handles sparse arrays
   - Preserves element order

2. Basic Usage:
   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6];
   
   // Concatenate two arrays
   const result1 = arr1.myConcat(arr2);
   console.log(result1); // [1, 2, 3, 4, 5, 6]
   
   // Concatenate with multiple arguments
   const result2 = arr1.myConcat(arr2, 7, 8);
   console.log(result2); // [1, 2, 3, 4, 5, 6, 7, 8]

3. With Nested Arrays:
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   const arr3 = [5, 6];
   
   // Concatenate nested arrays
   const result = arr1.myConcat([arr2, arr3]);
   console.log(result); // [1, 2, [3, 4], [5, 6]]
   
   // Note: concat only flattens one level
   const flatResult = arr1.myConcat(...[arr2, arr3]);
   console.log(flatResult); // [1, 2, 3, 4, 5, 6]

4. With Different Types:
   const arr = [1, 2];
   
   // Concatenate with different types
   const result = arr.myConcat(
     'hello',
     [3, 4],
     { name: 'John' },
     null,
     undefined
   );
   console.log(result); // [1, 2, 'hello', 3, 4, { name: 'John' }, null, undefined]

5. Edge Cases:
   // Empty arrays
   const empty1 = [];
   const empty2 = [];
   console.log(empty1.myConcat(empty2)); // []
   
   // Sparse arrays
   const sparse1 = [1, , 3];
   const sparse2 = [, 5, 6];
   console.log(sparse1.myConcat(sparse2)); // [1, 3, 5, 6]
   
   // Array-like objects
   const arrayLike = { 0: 'a', 1: 'b', length: 2 };
   console.log([1, 2].myConcat(arrayLike)); // [1, 2, { 0: 'a', 1: 'b', length: 2 }]

6. Complex Example - Merging Data:
   const users = [
     { id: 1, name: 'John' },
     { id: 2, name: 'Jane' }
   ];
   
   const newUsers = [
     { id: 3, name: 'Bob' },
     { id: 4, name: 'Alice' }
   ];
   
   const allUsers = users.myConcat(newUsers);
   console.log(allUsers);
   // [
   //   { id: 1, name: 'John' },
   //   { id: 2, name: 'Jane' },
   //   { id: 3, name: 'Bob' },
   //   { id: 4, name: 'Alice' }
   // ]

7. Chaining Example:
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   const arr3 = [5, 6];
   
   const result = arr1
     .myConcat(arr2)
     .myConcat(arr3);
   
   console.log(result); // [1, 2, 3, 4, 5, 6]

8. Real-world Example - Combining API Responses:
   const activeUsers = [
     { id: 1, name: 'John', status: 'active' },
     { id: 2, name: 'Jane', status: 'active' }
   ];
   
   const inactiveUsers = [
     { id: 3, name: 'Bob', status: 'inactive' },
     { id: 4, name: 'Alice', status: 'inactive' }
   ];
   
   const allUsers = activeUsers.myConcat(inactiveUsers);
   console.log(allUsers);
   // [
   //   { id: 1, name: 'John', status: 'active' },
   //   { id: 2, name: 'Jane', status: 'active' },
   //   { id: 3, name: 'Bob', status: 'inactive' },
   //   { id: 4, name: 'Alice', status: 'inactive' }
   // ]

9. Performance Consideration:
   const largeArray1 = Array.from({ length: 1000 }, (_, i) => i);
   const largeArray2 = Array.from({ length: 1000 }, (_, i) => i + 1000);
   
   // Concatenating large arrays
   const combined = largeArray1.myConcat(largeArray2);
   console.log(combined.length); // 2000
*/
