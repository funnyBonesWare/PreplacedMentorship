Array.prototype.myEvery = function (callbackFn, thisArg) {
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

      // If any element returns false, return false immediately
      if (!result) {
        return false;
      }
    }
  }

  // If we've gone through all elements and none returned false, return true
  return true;
};

/*
Understanding the every Implementation:

1. Key Features:
   - Returns true if ALL elements pass the test
   - Returns false if ANY element fails the test
   - Stops iteration as soon as a false is found
   - Handles sparse arrays
   - Supports thisArg context
   - Returns true for empty arrays

2. Basic Usage:
   const numbers = [2, 4, 6, 8, 10];
   
   // Check if all numbers are even
   const allEven = numbers.myEvery(num => num % 2 === 0);
   console.log(allEven); // true
   
   // Check if all numbers are greater than 5
   const allGreaterThan5 = numbers.myEvery(num => num > 5);
   console.log(allGreaterThan5); // false

3. With Objects:
   const users = [
     { name: 'John', age: 30 },
     { name: 'Jane', age: 25 },
     { name: 'Bob', age: 35 }
   ];
   
   // Check if all users are adults
   const allAdults = users.myEvery(user => user.age >= 18);
   console.log(allAdults); // true
   
   // Check if all names start with 'J'
   const allStartWithJ = users.myEvery(user => user.name.startsWith('J'));
   console.log(allStartWithJ); // false

4. With thisArg:
   const validator = {
     minAge: 18,
     maxAge: 65,
     isValidAge: function(age) {
       return age >= this.minAge && age <= this.maxAge;
     }
   };
   
   const ages = [20, 25, 30, 15];
   const allValidAges = ages.myEvery(validator.isValidAge, validator);
   console.log(allValidAges); // false

5. Error Handling:
   // Invalid callback
   try {
     [1, 2, 3].myEvery('not a function');
   } catch (error) {
     console.log(error); // TypeError: Callback must be a function
   }

6. Edge Cases:
   // Empty array
   const emptyArray = [];
   console.log(emptyArray.myEvery(x => x > 0)); // true
   
   // Sparse array
   const sparseArray = [1, , 3, , 5];
   console.log(sparseArray.myEvery(x => x > 0)); // true
   
   // Array with falsy values
   const falsyArray = [0, '', false, null, undefined];
   console.log(falsyArray.myEvery(x => x)); // false

7. Complex Example - Form Validation:
   const formData = [
     { field: 'username', value: 'john_doe', required: true },
     { field: 'email', value: 'john@example.com', required: true },
     { field: 'age', value: '25', required: true },
     { field: 'bio', value: '', required: false }
   ];
   
   const isFormValid = formData.myEvery(field => {
     if (field.required) {
       return field.value.trim().length > 0;
     }
     return true;
   });
   console.log(isFormValid); // true

8. Performance Optimization:
   const largeArray = Array.from({ length: 1000 }, (_, i) => i);
   
   // Stops at first false condition
   const allPositive = largeArray.myEvery(num => {
     console.log(`Checking ${num}`); // Only logs until first false
     return num >= 0;
   });
   console.log(allPositive); // true
*/
