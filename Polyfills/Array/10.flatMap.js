// Polyfill for Array.prototype.flatMap
Array.prototype.myFlatMap = function (callbackFn, thisArg) {
  // Input validation
  if (this === null || this === undefined) {
    throw new TypeError(
      "Array.prototype.myFlatMap called on null or undefined"
    );
  }
  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  // First map the array using the callback
  const mapped = this.map((item, index, array) => {
    return callbackFn.call(thisArg, item, index, array);
  });

  // Then flatten the result by one level
  return mapped.myFlat(1);
};

/*
Usage Examples:

1. Basic Usage:
   const arr = [1, 2, 3];
   console.log(arr.myFlatMap(x => [x, x * 2]));
   // [1, 2, 2, 4, 3, 6]

2. With String Splitting:
   const arr = ["it's Sunny in", "", "California"];
   console.log(arr.myFlatMap(x => x.split(" ")));
   // ["it's", "Sunny", "in", "", "California"]

3. With Filtering:
   const arr = [1, 2, 3, 4];
   console.log(arr.myFlatMap(x => x % 2 === 0 ? [x] : []));
   // [2, 4]

4. With Objects:
   const arr = [{name: "John", scores: [1, 2]}, {name: "Jane", scores: [3, 4]}];
   console.log(arr.myFlatMap(person => person.scores));
   // [1, 2, 3, 4]

5. With thisArg:
   const multiplier = {
     factor: 2,
     multiply: function(x) {
       return [x, x * this.factor];
     }
   };
   const arr = [1, 2, 3];
   console.log(arr.myFlatMap(multiplier.multiply, multiplier));
   // [1, 2, 2, 4, 3, 6]
*/
