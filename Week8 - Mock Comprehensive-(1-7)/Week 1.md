
### <font color="#2DC26B">1. Var</font>

- The var statement declares function-scoped or globally-scoped variables.
   
```js
var x = 1;
if (x === 1) {
    var x = 2;
    console.log(x); // Expected output: 2 
} 
console.log(x); // Expected output: 2

```

-  A variable declared with `var` is scoped to the nearest enclosing function body or static initialisation block, or if neither applies, to the current module in module mode or the global scope in script mode.
- Block constructs, including block statements, try...catch , switch , headers of one of the for statements, do not create scopes for var , and variables declared with var inside such a block can continue to be referenced outside the block, making it Global scoped.
- Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable will not lose its value, unless the declaration has an initialiser.
```js
var a = 1;
var a = 2;
console.log(a); // 2 
var a; 
console.log(a); // 2; not undefined
```
### <font color="#00b050">2. Let</font>

- The let declaration declares re-assignable, block-scoped local variables.
```js
let x = 1;
if (x === 1) {
    let x = 2;
    console.log(x); // Expected output: 2 
} console.log(x); // Expected output: 1
```
- let declarations are scoped to blocks as well as functions.
- let declarations can only be accessed after the place of declaration is reached (see temporal dead zone). For this reason, let declarations are commonly regarded as non-hoisted.
- let declarations cannot be redeclared by any other declaration in the same scope

### <font color="#00b050">3. Const</font>
- The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed
```js
const number = 42;
try {
    number = 99;
} catch (err) {
    console.log(err); // Expected output: TypeError: invalid assignment to const 'number' // (Note: the exact output may be browser-dependent) 
} console.log(number); // Expected output: 42
```

- const declarations are scoped to blocks as well as functions. const declarations can only be accessed after the place of declaration is reached (see temporal dead zone). For this reason, 
- const declarations are commonly regarded as non-hoisted.
-  const declarations cannot be redeclared by any other declaration in the same scope

### <font color="#00b050">4. Types of Functions</font>

#### <font color="#4bacc6">A. Immediately Invoked Function Expressions (IIFE)</font>
  - Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.
  - They are typically used to create a local scope for variables to prevent them from polluting the global scope.
```js
(function (){ 
	// Function Logic Here. 
})();
```

- IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function
  
```js
var counter = (function() {
    var count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
})(); // Increment the counter 
counter.increment(); 
counter.increment(); 
counter.increment(); 
console.log(counter.getCount()); // Output: 3 // Trying to access the private count variable directly 
console.log(counter.count); // Output: undefined (cannot access private count)
```

<font color="#c0504d">Explanation</font>: Here, count is a private variable scoped to the IIFE, inaccessible from outside. The returned object exposes methods (increment, decrement, and getCount) that allow controlled manipulation and access to the private count variable.
#### <font color="#4bacc6">B. Function Declaration and Function Statement</font>

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
- The name of the function. 
- A list of parameters to the function, enclosed in parentheses and separated by commas. 
- The JavaScript statements that define the function, enclosed in curly braces, { /* … */ } .
The function in the function declaration can be accessed before and after the function definition.

```js
function myFunc(theArr) {
    theArr[0] = 30;
}
const arr = [45]
console.log(arr[0]); // 45 myFunc(arr); 
console.log(arr[0]); // 30
```

#### <font color="#4bacc6">C. Function Expression</font>

While the function declaration above is syntactically a statement, functions can also be created by a function expression.

Such a function can be anonymous; it does not have to have a name. 
For example, the function square could have been defined as:

```js
const square = function(number) {
    return number * number;
};
console.log(square(4)); // 16
```
The function in the function expression can be accessed only after the function definition.
#### <font color="#4bacc6">D. Arrow Functions</font>

- An arrow function is a shorter syntax for writing functions in JavaScript. 
- Introduced in ES6, arrow functions allow for a more concise and readable code, especially in cases of small functions. 
- Unlike regular functions, arrow functions don’t have their own this, but instead, inherit it from the surrounding context.
- Arrow functions are written with the => symbol, which makes them compact.
- They don’t have their own this. They inherit this from the surrounding context.
- For functions with a single expression, the return is implicit, making the code more concise. 
- Arrow functions do not have access to the arguments object, which is available in regular functions.
```js
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3));
```
#### <font color="#4bacc6">E. Callbacks or CallBack Function</font>

- A callback function is a function that is passed as an argument to another function and executed later. 
- A function can accept another function as a parameter. 
- Callbacks allow one function to call another at a later time. 
- A callback function can execute after another function has finished.
```js
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}
greet("Ajay", sayBye);

//Output 
//Hello, 
//Ajay Goodbye!
```

Features of Callbacks:
1. Asynchronous Execution: Handle async tasks like API calls, timers, and events without blocking execution. 
2. Code Reusability: Write modular code by passing different callbacks for different behaviors. 
3. Event-Driven/DOM Related Programming: Enable event-based execution (e.g., handling clicks, keypresses). 
4. Error Handling: Pass errors to callbacks for better control in async operations. Non-Blocking 
5. Execution: Keep the main thread free by running long tasks asynchronously.
#### <font color="#4bacc6">F. Higher Order Functions</font>

A higher-order function is a function that does one of the following: 
- Takes another function as an argument. 
```js
function repeat(action, times) {
    for (let i = 0; i < times; i++) {
        action();
    }
}

function sayHello() {
    console.log("Hello, World!");
}

// repeat takes sayHello (a function) as an argument
repeat(sayHello, 3); // Output: Hello, World! (3 times)

```

- Returns another function as its result. 

```js
function multiplier(factor) {
    return function(x) {
        return x * factor;
    }
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

```

Higher-order functions help make your code more reusable and modular by allowing you to work with functions like any other value. They can used for memoization, currying etc. array methods like map, forEach etc. are higher order function
## <font color="#00b050">5. Execution Context</font>

JavaScript is a synchronous (Moves to the next line only when the execution of the current line is completed) and single-threaded (Executes one command at a time in a specific order one after another serially) language.

Execution Context: Everything in JavaScript is wrapped inside Execution Context, which is an abstract concept (can be treated as a container) that holds the whole information about the environment within which the current JavaScript code is being executed.

An Execution Context has two components and JavaScript code gets executed in two phases:

<font color="#f79646">Memory Allocation Phase: </font>In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigns undefined as a placeholder. 
<font color="#f79646">Code Execution Phase:</font> In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of execution) of Execution Context.

<font color="#ff0000">Call Stack:</font> When a program starts execution JavaScript pushes the whole program as global context into a stack which is known as Call Stack and continues execution. Whenever JavaScript executes a new context and just follows the same process and pushes to the stack. When the context finishes, JavaScript just pops the top of the stack accordingly.
## <font color="#00b050">6. Hoisting</font>

Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

In colloquial terms, any of the following behaviors may be regarded as hoisting: 

 Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting"), example-> Functions

 Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined . ("Declaration hoisting") , example-> "var"

 The declaration of the variable causes behavior changes in its scope before the line in which it is declared. example-> Let, const, Class, also known as Lexical declaration.

 The side effects of a declaration are produced before evaluating the rest of the code that contains it. example-> Import declarations are hoisted with type 1 and type 4 behavior.
### <font color="#00b050">7. Temporal Dead Zone</font>

The Temporal Dead Zone refers to the period between the entering of a scope and the actual declaration of a variable using let or const. During this period, the variable is in an "uninitialized" state and accessing it will result in a ReferenceError. 

- The TDZ starts from the beginning of the block until the variable is declared. 
- Variables declared with let and const are hoisted but not initialized. 
- Accessing the variable in the TDZ results in a ReferenceError. 
- var declarations do not have a TDZ and are initialized as undefined.

The Temporal Dead Zone works in the following manner:

1. <font color="#ffc000">Variable is declared with let or const:</font>When the variable is hoisted at the top of its current scope but they are not initialized. 
2. <font color="#ffc000">Entering TDZ:</font> From the hoisting till the variable initialization it will show the reference error if tried to access.
3. <font color="#ffc000">Variable initialization:</font> When the value is assigned to the variable from that point of time they exits no longer in the TDZ. 
4. <font color="#ffc000">Accessing the variable:</font>The variables can be accessed normally after the initialization without any errors.
### <font color="#00b050">8. Scope,Scope Chaining and lexical Environment</font>
JavaScript Scope is the area where a variable (or function) exists and is accessible. We can layer the scope in a system which means the child scope can access the parent scope but not vice-versa.

<font color="#f79646">Global Scope:</font>
Those variables which are declared outside the function or blocks or you can say curly braces({}) are having a global scope. In a JavaScript program, global variables can be accessed from anywhere

```js
var global_variable1 = "Geeksforgeeks";
let global_variable2 = "Geeks";
const global_variable3 = "GFG";

function check_global_variables() {
    console.log(global_variable1);
    console.log(global_variable2);
    console.log(global_variable3);
}
check_global_variables();

//output
Geeksforgeeks 
Geeks 
GFG
```

