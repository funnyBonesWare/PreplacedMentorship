// Polyfill for Object.entries
Object.myEntries = function (obj) {
  // Input validation
  if (obj === null || obj === undefined) {
    throw new TypeError("Object.myEntries called on null or undefined");
  }

  // Convert to object
  obj = Object(obj);

  // Get all enumerable properties
  const entries = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      entries.push([key, obj[key]]);
    }
  }

  return entries;
};

/*
Usage Examples:

1. Basic Usage:
   const obj = { a: 1, b: 2, c: 3 };
   console.log(Object.myEntries(obj));
   // [['a', 1], ['b', 2], ['c', 3]]

2. With Different Types:
   const obj = { a: 'hello', b: 42, c: true };
   console.log(Object.myEntries(obj));
   // [['a', 'hello'], ['b', 42], ['c', true]]

3. With Nested Objects:
   const obj = { a: { x: 1 }, b: { y: 2 } };
   console.log(Object.myEntries(obj));
   // [['a', { x: 1 }], ['b', { y: 2 }]]

4. With Array-like Object:
   const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
   console.log(Object.myEntries(obj));
   // [['0', 'a'], ['1', 'b'], ['2', 'c'], ['length', 3]]

5. With Symbol Properties:
   const sym = Symbol('test');
   const obj = { [sym]: 'value', a: 1 };
   console.log(Object.myEntries(obj));
   // [['a', 1]] (Symbol properties are not included)
*/
