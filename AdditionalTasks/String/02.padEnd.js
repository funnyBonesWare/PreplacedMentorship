// Polyfill for String.prototype.padEnd
String.prototype.myPadEnd = function (targetLength, padString = " ") {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError(
      "String.prototype.myPadEnd called on null or undefined"
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
  return this + padding;
};

/*
Usage Examples:

1. Basic Usage:
   const str = 'abc';
   console.log(str.myPadEnd(6)); // 'abc   '
   console.log(str.myPadEnd(6, 'x')); // 'abcxxx'

2. With Different Lengths:
   const str = 'abc';
   console.log(str.myPadEnd(2)); // 'abc' (no padding needed)
   console.log(str.myPadEnd(8)); // 'abc     '

3. With Different Pad Strings:
   const str = 'abc';
   console.log(str.myPadEnd(6, '123')); // 'abc123'
   console.log(str.myPadEnd(7, '123')); // 'abc1231'

4. With Empty String:
   const str = '';
   console.log(str.myPadEnd(3, 'x')); // 'xxx'

5. With Special Characters:
   const str = 'abc';
   console.log(str.myPadEnd(6, '😊')); // 'abc😊😊😊'
*/
