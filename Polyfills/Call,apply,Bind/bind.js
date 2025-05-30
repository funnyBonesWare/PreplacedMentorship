// Polyfill for Function.prototype.bind
Function.prototype.myBind = function(context, ...initialArgs) {
    // Store the reference to the original function
    const originalFunction = this;
    
    // Return a new function that will be called later
    return function(...laterArgs) {
        // Combine the initial arguments with the later arguments
        const allArgs = [...initialArgs, ...laterArgs];
        
        // If the function is called with 'new' keyword
        if (this instanceof originalFunction) {
            // Create a new instance of the original function
            return new originalFunction(...allArgs);
        }
        
        // For regular function calls, use our myCall implementation
        return originalFunction.myCall(context, ...allArgs);
    };
};

// Example usage:
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.introduce = function(greeting) {
//     console.log(`${greeting}, I'm ${this.name} and I'm ${this.age} years old.`);
// };

// const person1 = {
//     name: 'Alice',
//     age: 25
// };

// // Using the original bind method
// const boundIntroduce1 = Person.prototype.introduce.bind(person1, 'Hi');
// boundIntroduce1();

// // Using our polyfill
// const boundIntroduce2 = Person.prototype.introduce.myBind(person1, 'Hello');
// boundIntroduce2();

// // Example with constructor function
// const BoundPerson = Person.myBind(null, 'John');
// const person2 = new BoundPerson(30);
// console.log(person2); // { name: 'John', age: 30 }
