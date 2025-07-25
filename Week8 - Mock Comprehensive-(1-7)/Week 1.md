
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