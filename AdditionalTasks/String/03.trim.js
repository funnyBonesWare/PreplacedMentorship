// Polyfill for String.prototype.trim
String.prototype.myTrim = function () {
  // Step 1: Check if the string is null or undefined
  if (this === null || this === undefined) {
    throw new TypeError("Cannot trim null or undefined");
  }

  // Step 2: Convert to string (in case it's not already a string)
  let str = String(this);

  // Step 3: Remove spaces from the start
  while (str.length > 0 && str[0] === ' ') {
    str = str.slice(1);
  }

  // Step 4: Remove spaces from the end
  while (str.length > 0 && str[str.length - 1] === ' ') {
    str = str.slice(0, -1);
  }

  return str;
};

/*
Usage Examples:

1. Basic Usage:
   const greeting = '  Hello World  ';
   console.log(greeting.myTrim()); // 'Hello World'
   // Removes spaces from both start and end

2. With Different Types of Spaces:
   const text = '   Hello   World   ';
   console.log(text.myTrim()); // 'Hello   World'
   // Note: Spaces in the middle are kept

3. With No Spaces:
   const name = 'John';
   console.log(name.myTrim()); // 'John'
   // String without spaces stays the same

4. With Only Spaces:
   const empty = '     ';
   console.log(empty.myTrim()); // ''
   // String with only spaces becomes empty

5. With Special Characters:
   const special = '  Hello\nWorld  ';
   console.log(special.myTrim()); // 'Hello\nWorld'
   // Only spaces are removed, special characters stay
*/
