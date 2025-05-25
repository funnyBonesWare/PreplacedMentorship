// Polyfill for Object.keys
Object.myKeys = function (obj) {
  // Input validation
  if (obj === null || obj === undefined) {
    throw new TypeError("Object.myKeys called on null or undefined");
  }

  // Convert to object
  obj = Object(obj);

  // Get all enumerable property names
  const keys = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }

  return keys;
};

/*
Usage Examples:

1. Basic Usage:
   const obj = { a: 1, b: 2, c: 3 };
   console.log(Object.myKeys(obj));
   // ['a', 'b', 'c']

2. With Different Types:
   const obj = { a: 'hello', 2: 42, '': true };
   console.log(Object.myKeys(obj));
   // ['2', 'a', '']

3. With Prototype Properties:
   function Person(name) {
     this.name = name;
   }
   Person.prototype.age = 30;
   const person = new Person('John');
   console.log(Object.myKeys(person));
   // ['name']

4. With Array-like Object:
   const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
   console.log(Object.myKeys(obj));
   // ['0', '1', '2', 'length']

5. With Symbol Properties:
   const sym = Symbol('test');
   const obj = { [sym]: 'value', a: 1 };
   console.log(Object.myKeys(obj));
   // ['a'] (Symbol properties are not included)
*/
