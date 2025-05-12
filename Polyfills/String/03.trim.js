// Polyfill for String.prototype.trim
String.prototype.myTrim = function () {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError("String.prototype.myTrim called on null or undefined");
  }

  // Convert to string
  const str = String(this);

  // Regular expression to match whitespace at the start and end
  return str.replace(/^\s+|\s+$/g, "");
};

/*
Usage Examples:

1. Basic Usage:
   const str = '  Hello World  ';
   console.log(str.myTrim()); // 'Hello World'

2. With Different Whitespace Characters:
   const str = '\t\n\r Hello World \t\n\r';
   console.log(str.myTrim()); // 'Hello World'

3. With No Whitespace:
   const str = 'Hello World';
   console.log(str.myTrim()); // 'Hello World'

4. With Only Whitespace:
   const str = '   \t\n\r   ';
   console.log(str.myTrim()); // ''

5. With Special Characters:
   const str = '  Hello\nWorld  ';
   console.log(str.myTrim()); // 'Hello\nWorld'
*/
