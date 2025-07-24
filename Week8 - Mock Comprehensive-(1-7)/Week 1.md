
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

  

