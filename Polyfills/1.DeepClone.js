// Deep clone implementation that handles primitive values, arrays, and objects
function myDeepClone(value) {
  // Handle null, undefined, and primitive values
  if (!value) {
    return value;
  }
  // Return primitive values directly (numbers, strings, booleans)
  else if (typeof value !== "object") {
    return value;
  }
  // Handle arrays by recursively cloning each element
  else if (Array.isArray(value)) {
    return value.map((item) => myDeepClone(item));
  }
  // Handle objects by recursively cloning each property
  else {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = myDeepClone(value[key]);
      return acc;
    }, {});
  }
}

/* Test Cases:

// 1. Primitive Values
console.log(myDeepClone(42)); // 42
console.log(myDeepClone("hello")); // "hello"
console.log(myDeepClone(true)); // true
console.log(myDeepClone(null)); // null
console.log(myDeepClone(undefined)); // undefined

// 2. Arrays
const arr = [1, [2, 3], { a: 4 }];
const clonedArr = myDeepClone(arr);
console.log(clonedArr); // [1, [2, 3], { a: 4 }]
console.log(clonedArr[1] === arr[1]); // false (deep clone)
console.log(clonedArr[2] === arr[2]); // false (deep clone)

// 3. Objects
const obj = {
  a: 1,
  b: [2, 3],
  c: { d: 4 },
  e: null,
  f: undefined
};
const clonedObj = myDeepClone(obj);
console.log(clonedObj); // { a: 1, b: [2, 3], c: { d: 4 }, e: null, f: undefined }
console.log(clonedObj.b === obj.b); // false (deep clone)
console.log(clonedObj.c === obj.c); // false (deep clone)

// 4. Nested Structures
const nested = {
  a: [1, { b: 2 }],
  c: { d: [3, 4] }
};
const clonedNested = myDeepClone(nested);
console.log(clonedNested); // { a: [1, { b: 2 }], c: { d: [3, 4] } }
console.log(clonedNested.a[1] === nested.a[1]); // false (deep clone)
console.log(clonedNested.c.d === nested.c.d); // false (deep clone)

// 5. Circular References (Note: This implementation doesn't handle circular references)
const circular = { a: 1 };
circular.self = circular;
// console.log(myDeepClone(circular)); // This would cause infinite recursion

// 6. Special Objects (Note: This implementation doesn't handle special objects)
const date = new Date();
const regex = /hello/;
// console.log(myDeepClone(date)); // This would return a plain object
// console.log(myDeepClone(regex)); // This would return a plain object
*/
