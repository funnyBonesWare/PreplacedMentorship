Array.prototype.myFilter = function (callbackFn, thisArg) {
  // Validate that the callback is actually a function
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  // Get the length of the array
  const len = this.length;

  // Create a new array to store filtered elements
  const filteredArray = [];

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

      // If the callback returns true, add the element to filtered array
      if (result) {
        filteredArray.push(this[i]);
      }
    }
  }

  return filteredArray;
};

/*
Understanding the filter Implementation:

1. Key Features:
   - Creates a new array with elements that pass the test
   - Preserves original array
   - Handles sparse arrays
   - Supports thisArg context
   - Returns empty array for empty arrays
   - Maintains element order

2. Basic Usage:
   const numbers = [1, 2, 3, 4, 5, 6];
   
   // Filter even numbers
   const evenNumbers = numbers.myFilter(num => num % 2 === 0);
   console.log(evenNumbers); // [2, 4, 6]
   
   // Filter numbers greater than 3
   const greaterThanThree = numbers.myFilter(num => num > 3);
   console.log(greaterThanThree); // [4, 5, 6]

3. With Objects:
   const users = [
     { name: 'John', age: 17 },
     { name: 'Jane', age: 25 },
     { name: 'Bob', age: 16 },
     { name: 'Alice', age: 30 }
   ];
   
   // Filter adults
   const adults = users.myFilter(user => user.age >= 18);
   console.log(adults); // [{ name: 'Jane', age: 25 }, { name: 'Alice', age: 30 }]
   
   // Filter users with names starting with 'J'
   const jNames = users.myFilter(user => user.name.startsWith('J'));
   console.log(jNames); // [{ name: 'John', age: 17 }, { name: 'Jane', age: 25 }]

4. With thisArg:
   const validator = {
     minPrice: 500,
     maxPrice: 1000,
     isInRange: function(price) {
       return price >= this.minPrice && price <= this.maxPrice;
     }
   };
   
   const prices = [300, 600, 800, 1200, 900];
   const inRange = prices.myFilter(validator.isInRange, validator);
   console.log(inRange); // [600, 800, 900]

5. Error Handling:
   // Invalid callback
   try {
     [1, 2, 3].myFilter('not a function');
   } catch (error) {
     console.log(error); // TypeError: Callback must be a function
   }

6. Edge Cases:
   // Empty array
   const emptyArray = [];
   console.log(emptyArray.myFilter(x => x > 0)); // []
   
   // Sparse array
   const sparseArray = [1, , 3, , 5];
   console.log(sparseArray.myFilter(x => x > 2)); // [3, 5]
   
   // Array with falsy values
   const mixedArray = [0, 1, '', 'hello', false, true, null, undefined];
   console.log(mixedArray.myFilter(Boolean)); // [1, 'hello', true]

7. Complex Example - Data Filtering:
   const products = [
     { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
     { id: 2, name: 'Desk', price: 299, category: 'Furniture', inStock: true },
     { id: 3, name: 'Phone', price: 699, category: 'Electronics', inStock: false },
     { id: 4, name: 'Chair', price: 199, category: 'Furniture', inStock: true }
   ];
   
   const availableElectronics = products.myFilter(product => 
     product.category === 'Electronics' && product.inStock
   );
   console.log(availableElectronics); // [{ id: 1, name: 'Laptop', ... }]

8. Chaining Example:
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
   const result = numbers
     .myFilter(num => num % 2 === 0) // Get even numbers
     .myFilter(num => num > 5);      // Get numbers greater than 5
   
   console.log(result); // [6, 8, 10]

9. Real-world Example - Form Validation:
   const formFields = [
     { name: 'username', value: 'john_doe', required: true },
     { name: 'email', value: '', required: true },
     { name: 'age', value: '25', required: true },
     { name: 'bio', value: '', required: false }
   ];
   
   const emptyRequiredFields = formFields.myFilter(field => 
     field.required && !field.value.trim()
   );
   console.log(emptyRequiredFields); // [{ name: 'email', value: '', required: true }]
*/
