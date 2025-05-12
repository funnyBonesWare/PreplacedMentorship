// Polyfill for String.prototype.padStart
String.prototype.myPadStart = function (targetLength, padString = " ") {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError(
      "String.prototype.myPadStart called on null or undefined"
    );
  }

  // Convert targetLength to number
  targetLength = Math.floor(Number(targetLength)) || 0;

  // If targetLength is less than or equal to the string length, return the original string
  if (targetLength <= this.length) {
    return String(this);
  }

  // Convert padString to string
  padString = String(padString);

  // If padString is empty, use space
  if (padString.length === 0) {
    padString = " ";
  }

  // Calculate how many times we need to repeat the padString
  const padLength = targetLength - this.length;
  const padCount = Math.ceil(padLength / padString.length);

  // Create the padding
  const padding = padString.repeat(padCount).slice(0, padLength);

  // Return the padded string
  return padding + this;
};

/*
Usage Examples:

1. Basic Usage:
   const str = 'abc';
   console.log(str.myPadStart(6)); // '   abc'
   console.log(str.myPadStart(6, 'x')); // 'xxxabc'

2. With Different Lengths:
   const str = 'abc';
   console.log(str.myPadStart(2)); // 'abc' (no padding needed)
   console.log(str.myPadStart(8)); // '     abc'

3. With Different Pad Strings:
   const str = 'abc';
   console.log(str.myPadStart(6, '123')); // '123abc'
   console.log(str.myPadStart(7, '123')); // '1231abc'

4. With Empty String:
   const str = '';
   console.log(str.myPadStart(3, 'x')); // 'xxx'

5. With Special Characters:
   const str = 'abc';
   console.log(str.myPadStart(6, '😊')); // '😊😊😊abc'
*/
