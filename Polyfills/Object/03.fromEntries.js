// Polyfill for Object.fromEntries
Object.myFromEntries = function (iterable) {
  // Input validation
  if (iterable === null || iterable === undefined) {
    throw new TypeError("Object.myFromEntries called on null or undefined");
  }

  // Convert iterable to array if it's not already
  const entries = Array.from(iterable);

  // Create new object
  const obj = {};

  // Add each entry to the object
  for (const [key, value] of entries) {
    obj[key] = value;
  }

  return obj;
};

/*
Usage Examples:

1. Basic Usage:
   const entries = [['a', 1], ['b', 2], ['c', 3]];
   console.log(Object.myFromEntries(entries));
   // { a: 1, b: 2, c: 3 }

2. With Map:
   const map = new Map([['a', 1], ['b', 2]]);
   console.log(Object.myFromEntries(map));
   // { a: 1, b: 2 }

3. With Different Types:
   const entries = [['a', 'hello'], ['b', 42], ['c', true]];
   console.log(Object.myFromEntries(entries));
   // { a: 'hello', b: 42, c: true }

4. With Nested Objects:
   const entries = [['a', { x: 1 }], ['b', { y: 2 }]];
   console.log(Object.myFromEntries(entries));
   // { a: { x: 1 }, b: { y: 2 } }

5. With URLSearchParams:
   const params = new URLSearchParams('foo=bar&baz=qux');
   console.log(Object.myFromEntries(params));
   // { foo: 'bar', baz: 'qux' }
*/
