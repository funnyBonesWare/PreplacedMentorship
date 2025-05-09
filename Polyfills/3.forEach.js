//1. Simple Implementation
Array.prototype.myForEach = function (callbackFn, thisArg) {
  // Validate that the callback is actually a function
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  // Iterate through each element of the array
  for (let i = 0; i < this.length; i++) {
    // Call the callback function for each element
    // Parameters: current element, index, original array
    callbackFn(this[i], i, this);
  }
};

//2. Advanced Implementation with thisArg support
Array.prototype.myForEach = function (callbackFn, thisArg) {
  // Get the length of the array
  const len = this.length;

  // Validate that the callback is actually a function
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  // Iterate through each element
  for (let k = 0; k < len; k++) {
    // Check if the index exists in the array (handles sparse arrays)
    if (Object.hasOwn(this, k)) {
      // Use call() to invoke the callback with:
      // - thisArg as the 'this' context
      // - current element (this[k]) as first argument
      // - current index (k) as second argument
      // - original array (this) as third argument
      callbackFn.call(thisArg, this[k], k, this);
    }
  }
};

/*
Understanding the forEach Implementation:

1. Key Differences from map():
   - forEach() doesn't return anything (returns undefined)
   - forEach() is used for side effects rather than transformations
   - forEach() cannot be chained like map()

2. Basic Usage:
   const numbers = [1, 2, 3, 4, 5];
   
   // Simple iteration
   numbers.myForEach(num => console.log(num));
   // Output: 1, 2, 3, 4, 5
   
   // Using index
   numbers.myForEach((num, index) => console.log(`${index}: ${num}`));
   // Output: "0: 1", "1: 2", "2: 3", "3: 4", "4: 5"

3. With thisArg:
   const counter = {
     count: 0,
     increment: function(num) {
       this.count += num;
     }
   };
   
   const numbers = [1, 2, 3];
   numbers.myForEach(counter.increment, counter);
   console.log(counter.count); // 6

4. With Sparse Arrays:
   const sparseArray = [1, , 3, , 5];
   sparseArray.myForEach(x => console.log(x));
   // Output: 1, 3, 5

5. Error Handling:
   try {
     [1, 2, 3].myForEach('not a function');
   } catch (error) {
     console.log(error); // TypeError: Callback must be a function
   }

6. Complex Example with Objects:
   const users = [
     { name: 'John', age: 30 },
     { name: 'Jane', age: 25 }
   ];
   
   users.myForEach(user => {
     console.log(`${user.name} is ${user.age} years old`);
   });
   // Output: "John is 30 years old", "Jane is 25 years old"
*/
