// Polyfill for String.prototype.startsWith
String.prototype.myStartsWith = function (searchString, position = 0) {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError(
      "String.prototype.myStartsWith called on null or undefined"
    );
  }

  // Convert to string
  const str = String(this);

  // Convert searchString to string
  searchString = String(searchString);

  // Convert position to number and handle edge cases
  position = Math.floor(Number(position)) || 0;
  position = Math.max(Math.min(position, str.length), 0);

  // Check if the string starts with searchString at the given position
  return str.slice(position, position + searchString.length) === searchString;
};

/*
Usage Examples:

1. Basic Usage:
   const str = 'Hello World';
   console.log(str.myStartsWith('Hello')); // true
   console.log(str.myStartsWith('World')); // false

2. With Position:
   const str = 'Hello World';
   console.log(str.myStartsWith('World', 6)); // true
   console.log(str.myStartsWith('Hello', 1)); // false

3. With Empty String:
   const str = 'Hello World';
   console.log(str.myStartsWith('')); // true
   console.log(str.myStartsWith('', 5)); // true

4. With Different Types:
   const str = '123Hello';
   console.log(str.myStartsWith(123)); // true
   console.log(str.myStartsWith('123')); // true

5. With Special Characters:
   const str = 'Hello\nWorld';
   console.log(str.myStartsWith('Hello\n')); // true
   console.log(str.myStartsWith('Hello\n', 1)); // false
*/
