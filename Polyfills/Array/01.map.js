//1. Easy Way when with don't need this args in our custom map
Array.prototype.myMap = function (callbackFn, thisArg) {
  // Create an empty array to store the results
  var myArr = [];

  // Validate that the callback is actually a function
  if (typeof callbackFn != "function") {
    throw "Call Back Fucntion is not the function";
  } else {
    // Iterate through each element of the array
    for (let i = 0; i < this.length; i++) {
      // Call the callback function for each element and push the result
      // Parameters: current element, index, original array
      myArr.push(callbackFn(this[i], i, this));
    }
  }
  return myArr;
};

//2. Hard Way when we need this args in our custom map
Array.prototype.myMap = function (callbackFn, thisArg) {
  // Get the length of the array
  const len = this.length;
  // Create a new array with the same length as the original
  const array = new Array(len);

  // Iterate through each element
  for (let k = 0; k < len; k++) {
    // Check if the index exists in the array (handles sparse arrays)
    if (Object.hasOwn(this, k)) {
      // Use call() to invoke the callback with:
      // - thisArg as the 'this' context
      // - current element (this[k]) as first argument
      // - current index (k) as second argument
      // - original array (this) as third argument
      array[k] = callbackFn.call(thisArg, this[k], k, this);
    }
  }

  return array;
};

/*
Understanding the call() method:

1. Basic Syntax:
   function.call(thisArg, arg1, arg2, ...)

2. Example 1: Basic Usage
   const person = {
       name: 'John',
       greet: function() {
           console.log(`Hello, I'm ${this.name}`);
       }
   };
   const anotherPerson = { name: 'Jane' };
   person.greet.call(anotherPerson); // Output: "Hello, I'm Jane"

3. Example 2: With Arguments
   function multiply(a, b) {
       return a * b;
   }
   const numbers = [2, 3];
   const result = multiply.call(null, ...numbers); // Result: 6

4. In our map implementation:
   callbackFn.call(thisArg, this[k], k, this)
   - thisArg: Sets the 'this' context for the callback
   - this[k]: Current array element
   - k: Current index
   - this: Original array

5. Key Points:
   - call() allows you to set the 'this' value explicitly
   - Arguments are passed individually (unlike apply() which takes an array)
   - If thisArg is null/undefined, 'this' refers to the global object in non-strict mode
   - In strict mode, 'this' will be undefined if thisArg is null/undefined
*/

/*
How to invoke our myMap implementations:

1. Basic Usage (Both Implementations):
   const numbers = [1, 2, 3, 4, 5];
   
   // Simple transformation
   const doubled = numbers.myMap(num => num * 2);
   console.log(doubled); // [2, 4, 6, 8, 10]
   
   // Using index
   const withIndex = numbers.myMap((num, index) => `${index}: ${num}`);
   console.log(withIndex); // ['0: 1', '1: 2', '2: 3', '3: 4', '4: 5']

2. With thisArg (Second Implementation):
   const multiplier = {
       factor: 2,
       multiply: function(num) {
           return num * this.factor;
       }
   };
   
   const numbers = [1, 2, 3];
   const result = numbers.myMap(multiplier.multiply, multiplier);
   console.log(result); // [2, 4, 6]

3. With Sparse Arrays (Second Implementation):
   const sparseArray = [1, , 3, , 5];
   const result = sparseArray.myMap(x => x * 2);
   console.log(result); // [2, empty, 6, empty, 10]

4. Error Handling:
   try {
       [1, 2, 3].myMap('not a function');
   } catch (error) {
       console.log(error); // "Call Back Fucntion is not the function"
   }

5. Complex Example with Objects:
   const users = [
       { name: 'John', age: 30 },
       { name: 'Jane', age: 25 }
   ];
   
   const names = users.myMap(user => user.name);
   console.log(names); // ['John', 'Jane']
   
   const formatted = users.myMap((user, index) => ({
       id: index + 1,
       fullName: user.name,
       isAdult: user.age >= 18
   }));
   console.log(formatted);
   // [
   //   { id: 1, fullName: 'John', isAdult: true },
   //   { id: 2, fullName: 'Jane', isAdult: true }
   // ]
*/
