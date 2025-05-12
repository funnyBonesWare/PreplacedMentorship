Array.prototype.myReduce = function (callbackFn, initialValue) {
  // Validate that the callback is actually a function
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  // Get the length of the array
  const len = this.length;

  // Handle empty array with no initial value
  if (len === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  // Initialize accumulator and starting index
  let accumulator = initialValue;
  let startIndex = 0;

  // If no initial value is provided, use first element as initial value
  if (initialValue === undefined) {
    // Find first non-empty element in case of sparse array
    while (startIndex < len && !Object.hasOwn(this, startIndex)) {
      startIndex++;
    }

    // If we couldn't find any elements, throw error
    if (startIndex >= len) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = this[startIndex];
    startIndex++;
  }

  // Iterate through remaining elements
  for (let i = startIndex; i < len; i++) {
    // Skip empty slots in sparse arrays
    if (Object.hasOwn(this, i)) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

/*
Understanding the reduce Implementation:

1. Key Features:
   - Accumulates array elements into a single value
   - Supports initial value (optional)
   - Handles sparse arrays
   - Maintains proper 'this' context
   - Throws appropriate errors for edge cases

2. Basic Usage:
   const numbers = [1, 2, 3, 4, 5];
   
   // Sum of numbers
   const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
   console.log(sum); // 15
   
   // Without initial value
   const sum2 = numbers.myReduce((acc, curr) => acc + curr);
   console.log(sum2); // 15

3. With Objects:
   const users = [
     { name: 'John', age: 30 },
     { name: 'Jane', age: 25 },
     { name: 'Bob', age: 35 }
   ];
   
   // Create name-age mapping
   const nameAgeMap = users.myReduce((acc, user) => {
     acc[user.name] = user.age;
     return acc;
   }, {});
   console.log(nameAgeMap);
   // { John: 30, Jane: 25, Bob: 35 }

4. Complex Example - Grouping:
   const items = [
     { type: 'fruit', name: 'apple' },
     { type: 'vegetable', name: 'carrot' },
     { type: 'fruit', name: 'banana' },
     { type: 'vegetable', name: 'potato' }
   ];
   
   const grouped = items.myReduce((acc, item) => {
     if (!acc[item.type]) {
       acc[item.type] = [];
     }
     acc[item.type].push(item.name);
     return acc;
   }, {});
   console.log(grouped);
   // {
   //   fruit: ['apple', 'banana'],
   //   vegetable: ['carrot', 'potato']
   // }

5. Error Handling:
   // Empty array without initial value
   try {
     [].myReduce((acc, curr) => acc + curr);
   } catch (error) {
     console.log(error); // TypeError: Reduce of empty array with no initial value
   }
   
   // Invalid callback
   try {
     [1, 2, 3].myReduce('not a function');
   } catch (error) {
     console.log(error); // TypeError: Callback must be a function
   }

6. Advanced Usage - Flattening Arrays:
   const nestedArrays = [1, [2, 3], [4, [5, 6]]];
   
   const flatten = (arr) => arr.myReduce((acc, curr) => {
     return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
   }, []);
   
   console.log(flatten(nestedArrays)); // [1, 2, 3, 4, 5, 6]

7. Performance Optimization Example:
   const largeArray = Array.from({ length: 1000 }, (_, i) => i);
   
   // Using reduce to find max value
   const max = largeArray.myReduce((acc, curr) => 
     curr > acc ? curr : acc
   );
   console.log(max); // 999
*/
