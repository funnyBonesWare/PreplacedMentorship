// Polyfill for String.prototype.replaceAll
String.prototype.myReplaceAll = function (searchValue, replaceValue) {
  // Step 1: Check if the string is null or undefined
  if (this === null || this === undefined) {
    throw new TypeError("Cannot replace in null or undefined");
  }

  // Step 2: Convert to string (in case it's not already a string)
  let str = String(this);
  
  // Step 3: Convert searchValue to string
  let search = String(searchValue);
  
  // Step 4: Convert replaceValue to string
  let replace = String(replaceValue);

  // Step 5: If search string is empty, handle special case
  if (search === '') {
    let result = '';
    // Add replace value between each character
    for (let i = 0; i < str.length; i++) {
      result += replace + str[i];
    }
    // Add replace value at the end
    result += replace;
    return result;
  }

  // Step 6: Replace all occurrences
  let result = '';
  let currentIndex = 0;
  
  while (currentIndex < str.length) {
    // Check if we found the search string
    let found = true;
    for (let i = 0; i < search.length; i++) {
      if (str[currentIndex + i] !== search[i]) {
        found = false;
        break;
      }
    }
    
    if (found) {
      // Add the replacement
      result += replace;
      // Skip the search string length
      currentIndex += search.length;
    } else {
      // Add the current character
      result += str[currentIndex];
      currentIndex++;
    }
  }
  
  return result;
};

/*
Usage Examples:

1. Basic Usage:
   const text = 'Hello World World';
   console.log(text.myReplaceAll('World', 'Universe'));
   // Output: 'Hello Universe Universe'
   // Replaces every 'World' with 'Universe'

2. With Different Words:
   const sentence = 'The cat and the dog and the bird';
   console.log(sentence.myReplaceAll('the', 'a'));
   // Output: 'The cat and a dog and a bird'
   // Replaces every 'the' with 'a' (case sensitive)

3. With Empty Search:
   const word = 'Hello';
   console.log(word.myReplaceAll('', '-'));
   // Output: '-H-e-l-l-o-'
   // Adds '-' between each character and at start/end

4. With Same Word:
   const message = 'yes yes yes';
   console.log(message.myReplaceAll('yes', 'no'));
   // Output: 'no no no'
   // Replaces every 'yes' with 'no'

5. With Special Characters:
   const path = 'folder/subfolder/file.txt';
   console.log(path.myReplaceAll('/', '\\'));
   // Output: 'folder\\subfolder\\file.txt'
   // Replaces every '/' with '\\'
*/
