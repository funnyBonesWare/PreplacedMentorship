// Polyfill for Object.hasOwn
Object.myHasOwn = function (obj, prop) {
  // Input validation
  if (obj === null || obj === undefined) {
    throw new TypeError("Object.myHasOwn called on null or undefined");
  }

  // Convert to object
  obj = Object(obj);

  // Check if the property exists directly on the object
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

/*
Usage Examples:

1. Basic Usage:
   const obj = { a: 1, b: 2 };
   console.log(Object.myHasOwn(obj, 'a')); // true
   console.log(Object.myHasOwn(obj, 'c')); // false

2. With Prototype Properties:
   function Person(name) {
     this.name = name;
   }
   Person.prototype.age = 30;
   const person = new Person('John');
   console.log(Object.myHasOwn(person, 'name')); // true
   console.log(Object.myHasOwn(person, 'age')); // false

3. With Different Types:
   const obj = { a: 1, '2': 2, '': 3 };
   console.log(Object.myHasOwn(obj, 'a')); // true
   console.log(Object.myHasOwn(obj, 2)); // true
   console.log(Object.myHasOwn(obj, '')); // true

4. With Symbol Properties:
   const sym = Symbol('test');
   const obj = { [sym]: 'value' };
   console.log(Object.myHasOwn(obj, sym)); // true

5. With Null/Undefined:
   const obj = Object.create(null);
   obj.a = 1;
   console.log(Object.myHasOwn(obj, 'a')); // true
   console.log(Object.myHasOwn(obj, 'toString')); // false
*/
