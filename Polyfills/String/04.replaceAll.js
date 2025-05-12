// Polyfill for String.prototype.replaceAll
String.prototype.myReplaceAll = function (searchValue, replaceValue) {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError(
      "String.prototype.myReplaceAll called on null or undefined"
    );
  }

  // Convert to string
  const str = String(this);

  // If searchValue is a string, escape special characters
  if (typeof searchValue === "string") {
    searchValue = searchValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Create a regular expression with global flag
  const regex = new RegExp(searchValue, "g");

  // Perform the replacement
  return str.replace(regex, replaceValue);
};

/*
Usage Examples:

1. Basic Usage:
   const str = 'Hello World World';
   console.log(str.myReplaceAll('World', 'Universe')); // 'Hello Universe Universe'

2. With Special Characters:
   const str = 'Hello.World.World';
   console.log(str.myReplaceAll('.', '-')); // 'Hello-World-World'

3. With Regular Expression:
   const str = 'Hello123World456';
   console.log(str.myReplaceAll(/\d+/g, '')); // 'HelloWorld'

4. With Function Replacement:
   const str = 'Hello World World';
   console.log(str.myReplaceAll('World', (match) => match.toUpperCase())); // 'Hello WORLD WORLD'

5. With Empty String:
   const str = 'Hello World';
   console.log(str.myReplaceAll('', '-')); // '-H-e-l-l-o- -W-o-r-l-d-'
*/
