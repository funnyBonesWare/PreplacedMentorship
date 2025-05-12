Array.prototype.myFind = function (callbackFn, thisArg) {
  // Validate that the callback is actually a function
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  // Get the length of the array
  const len = this.length;

  // Iterate through each element
  for (let i = 0; i < len; i++) {
    // Skip empty slots in sparse arrays
    if (Object.hasOwn(this, i)) {
      // Call the callback function with:
      // - thisArg as the 'this' context
      // - current element (this[i]) as first argument
      // - current index (i) as second argument
      // - original array (this) as third argument
      const result = callbackFn.call(thisArg, this[i], i, this);

      // If the callback returns true, return the current element
      if (result) {
        return this[i];
      }
    }
  }

  // If no element satisfies the condition, return undefined
  return undefined;
};

/*
Understanding the find Implementation:

1. Key Features:
   - Returns the FIRST element that satisfies the test
   - Returns undefined if no element is found
   - Stops iteration as soon as a match is found
   - Handles sparse arrays
   - Supports thisArg context
   - Returns undefined for empty arrays

2. Basic Usage:
   const numbers = [1, 2, 3, 4, 5];
   
   // Find first even number
   const firstEven = numbers.myFind(num => num % 2 === 0);
   console.log(firstEven); // 2
   
   // Find first number greater than 10
   const firstGreaterThan10 = numbers.myFind(num => num > 10);
   console.log(firstGreaterThan10); // undefined

3. With Objects:
   const users = [
     { name: 'John', age: 17 },
     { name: 'Jane', age: 25 },
     { name: 'Bob', age: 16 }
   ];
   
   // Find first adult
   const firstAdult = users.myFind(user => user.age >= 18);
   console.log(firstAdult); // { name: 'Jane', age: 25 }
   
   // Find first user with name starting with 'Z'
   const firstZName = users.myFind(user => user.name.startsWith('Z'));
   console.log(firstZName); // undefined

4. With thisArg:
   const validator = {
     minScore: 80,
     isPassingScore: function(score) {
       return score >= this.minScore;
     }
   };
   
   const scores = [65, 72, 85, 90];
   const firstPassing = scores.myFind(validator.isPassingScore, validator);
   console.log(firstPassing); // 85

5. Error Handling:
   // Invalid callback
   try {
     [1, 2, 3].myFind('not a function');
   } catch (error) {
     console.log(error); // TypeError: Callback must be a function
   }

6. Edge Cases:
   // Empty array
   const emptyArray = [];
   console.log(emptyArray.myFind(x => x > 0)); // undefined
   
   // Sparse array
   const sparseArray = [1, , 3, , 5];
   console.log(sparseArray.myFind(x => x > 4)); // 5
   
   // Array with falsy values
   const falsyArray = [0, '', false, null, undefined];
   console.log(falsyArray.myFind(x => x === false)); // false

7. Complex Example - Finding by Multiple Conditions:
   const products = [
     { id: 1, name: 'Laptop', price: 999, inStock: true },
     { id: 2, name: 'Phone', price: 699, inStock: false },
     { id: 3, name: 'Tablet', price: 499, inStock: true },
     { id: 4, name: 'Watch', price: 299, inStock: true }
   ];
   
   const affordableInStock = products.myFind(product => 
     product.price < 500 && product.inStock
   );
   console.log(affordableInStock); // { id: 3, name: 'Tablet', price: 499, inStock: true }

8. Performance Optimization:
   const largeArray = Array.from({ length: 1000 }, (_, i) => i);
   
   // Stops at first match
   const firstMatch = largeArray.myFind(num => {
     console.log(`Checking ${num}`); // Only logs until first match
     return num > 5;
   });
   console.log(firstMatch); // 6

9. Real-world Example - User Search:
   const users = [
     { id: 1, name: 'John', email: 'john@example.com', active: true },
     { id: 2, name: 'Jane', email: 'jane@example.com', active: false },
     { id: 3, name: 'Bob', email: 'bob@example.com', active: true }
   ];
   
   const findUserByEmail = (email) => users.myFind(user => 
     user.email === email && user.active
   );
   
   console.log(findUserByEmail('jane@example.com')); // undefined (inactive)
   console.log(findUserByEmail('bob@example.com')); // { id: 3, name: 'Bob', ... }
*/
