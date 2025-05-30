
// Custom implementation of Function.prototype.bind
Function.prototype.myBind = function(context, ...initialArgs) {
    const originalFunction = this;
    
    return function(...laterArgs) {
        const uniqueProp = Symbol('uniqueProp');
        context = context || (typeof window !== 'undefined' ? window : global);
        context[uniqueProp] = originalFunction;
        
        const result = context[uniqueProp](...initialArgs, ...laterArgs);
        delete context[uniqueProp];
        
        return result;
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

// // Using our polyfill
// const boundIntroduce = Person.prototype.introduce.myBind(person1, 'Hello');
// boundIntroduce();

// // Example with constructor function
// const BoundPerson = Person.myBind(null, 'John');
// const person2 = new BoundPerson(30);
// console.log(person2); // { name: 'John', age: 30 }
