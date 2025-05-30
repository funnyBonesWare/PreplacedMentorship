// Polyfill for Function.prototype.call
Function.prototype.myCall = function(context, ...args) {
    // If no context is provided, use global object (window in browser, global in Node)
    context = context || globalThis;
    
    // Add the function as a property of the context object
    // We use a unique symbol to avoid property name conflicts
    const uniqueKey = Symbol('uniqueKey');
    context[uniqueKey] = this;
    
    // Call the function with the provided context and arguments
    const result = context[uniqueKey](...args);
    
    // Clean up by removing the temporary property
    delete context[uniqueKey];
    
    // Return the result of the function call
    return result;
};

// // Example usage:
// function greet(name, age) {
//     console.log(`Hello ${name}, you are ${age} years old.`);
//     console.log('this value:', this);
// }

// const person = {
//     name: 'John',
//     age: 30
// };

// // Using the original call method
// greet.call(person, 'Alice', 25);

// // Using our polyfill
// greet.myCall(person, 'Bob', 35);
