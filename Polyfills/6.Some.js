Array.prototype.mySome = function (callbackFn, thisArg) {
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

      // If any element returns true, return true immediately
      if (result) {
        return true;
      }
    }
  }

  // If we've gone through all elements and none returned true, return false
  return false;
};

/*
Understanding the some Implementation:

1. Key Features:
   - Returns true if ANY element passes the test
   - Returns false if ALL elements fail the test
   - Stops iteration as soon as a true is found
   - Handles sparse arrays
   - Supports thisArg context
   - Returns false for empty arrays

2. Basic Usage:
   const numbers = [1, 2, 3, 4, 5];
   
   // Check if any number is even
   const hasEven = numbers.mySome(num => num % 2 === 0);
   console.log(hasEven); // true
   
   // Check if any number is greater than 10
   const hasGreaterThan10 = numbers.mySome(num => num > 10);
   console.log(hasGreaterThan10); // false

3. With Objects:
   const users = [
     { name: 'John', age: 17 },
     { name: 'Jane', age: 25 },
     { name: 'Bob', age: 16 }
   ];
   
   // Check if any user is an adult
   const hasAdult = users.mySome(user => user.age >= 18);
   console.log(hasAdult); // true
   
   // Check if any name starts with 'Z'
   const hasZName = users.mySome(user => user.name.startsWith('Z'));
   console.log(hasZName); // false

4. With thisArg:
   const validator = {
     minScore: 80,
     hasPassingScore: function(score) {
       return score >= this.minScore;
     }
   };
   
   const scores = [65, 72, 85, 90];
   const hasPassing = scores.mySome(validator.hasPassingScore, validator);
   console.log(hasPassing); // true

5. Error Handling:
   // Invalid callback
   try {
     [1, 2, 3].mySome('not a function');
   } catch (error) {
     console.log(error); // TypeError: Callback must be a function
   }

6. Edge Cases:
   // Empty array
   const emptyArray = [];
   console.log(emptyArray.mySome(x => x > 0)); // false
   
   // Sparse array
   const sparseArray = [1, , 3, , 5];
   console.log(sparseArray.mySome(x => x > 4)); // true
   
   // Array with falsy values
   const falsyArray = [0, '', false, null, undefined];
   console.log(falsyArray.mySome(x => x)); // false

7. Complex Example - Permission Check:
   const userPermissions = [
     { resource: 'users', action: 'read', granted: true },
     { resource: 'users', action: 'write', granted: false },
     { resource: 'posts', action: 'read', granted: true },
     { resource: 'posts', action: 'write', granted: false }
   ];
   
   const canWrite = userPermissions.mySome(permission => 
     permission.action === 'write' && permission.granted
   );
   console.log(canWrite); // false

8. Performance Optimization:
   const largeArray = Array.from({ length: 1000 }, (_, i) => i);
   
   // Stops at first true condition
   const hasNegative = largeArray.mySome(num => {
     console.log(`Checking ${num}`); // Only logs until first true
     return num < 0;
   });
   console.log(hasNegative); // false

9. Real-world Example - Form Validation:
   const formErrors = [
     { field: 'username', error: '' },
     { field: 'email', error: 'Invalid email format' },
     { field: 'password', error: '' }
   ];
   
   const hasErrors = formErrors.mySome(field => field.error.length > 0);
   console.log(hasErrors); // true
*/
