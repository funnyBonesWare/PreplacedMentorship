// Polyfill for Object.values
Object.myValues = function (obj) {
  // Input validation
  if (obj === null || obj === undefined) {
    throw new TypeError("Object.myValues called on null or undefined");
  }

  // Convert to object
  obj = Object(obj);

  // Get all enumerable property values
  const values = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      values.push(obj[key]);
    }
  }

  return values;
};

/*
Usage Examples:

1. Basic Usage:
   const obj = { a: 1, b: 2, c: 3 };
   console.log(Object.myValues(obj));
   // [1, 2, 3]

2. With Different Types:
   const obj = { a: 'hello', b: 42, c: true };
   console.log(Object.myValues(obj));
   // ['hello', 42, true]

3. With Nested Objects:
   const obj = { a: { x: 1 }, b: { y: 2 } };
   console.log(Object.myValues(obj));
   // [{ x: 1 }, { y: 2 }]

4. With Array-like Object:
   const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
   console.log(Object.myValues(obj));
   // ['a', 'b', 'c', 3]

5. With Symbol Properties:
   const sym = Symbol('test');
   const obj = { [sym]: 'value', a: 1 };
   console.log(Object.myValues(obj));
   // [1] (Symbol properties are not included)
*/
