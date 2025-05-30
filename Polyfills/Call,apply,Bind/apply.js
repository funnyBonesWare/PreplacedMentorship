// Polyfill for Function.prototype.apply
Function.prototype.myApply = function(context, argsArray) {
    context = context || (typeof window !== 'undefined' ? window : global);
    
    argsArray = Array.isArray(argsArray) ? argsArray : [];
    
    // Add the function as a property of the context object
    // We use a unique symbol to avoid property name conflicts
    const uniqueKey = Symbol('uniqueKey');
    context[uniqueKey] = this;
    
    // Call the function with the provided context and array of arguments
    const result = context[uniqueKey](...argsArray);
    
    // Clean up by removing the temporary property
    delete context[uniqueKey];
    
    // Return the result of the function call
    return result;
};

// Example usage:
// function calculateSum(a, b, c) {
//     console.log('this value:', this);
//     return a + b + c;
// }

// const numbers = {
//     multiplier: 2
// };

// // Using the original apply method
// const sum1 = calculateSum.apply(numbers, [1, 2, 3]);
// console.log('Sum 1:', sum1);

// // Using our polyfill
// const sum2 = calculateSum.myApply(numbers, [4, 5, 6]);
// console.log('Sum 2:', sum2);
