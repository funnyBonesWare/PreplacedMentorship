
### <font color="#4bacc6">Var</font>

The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

#### <font color="#f79646">What is Function Scope?</font>

```js
function foo() {  
var x = 1;  
function bar() {  
  var y = 2;  
   console.log(x); // 1 (function `bar` closes over `x`)  
   console.log(y); // 2 (`y` is in scope)  
}  
bar();  
 console.log(x); // 1 (`x` is in scope)
 console.log(y); // ReferenceError, `y` is scoped to `bar`
}  
foo()
```

Importantly, other block constructs, including block statements, try...catch ,
switch, headers of one of the for statements, do not create scopes for var, and
variables declared with var inside such a block can continue to be referenced
outside the block

```js
for (var a of [1, 2, 3]);  
console.log(a); // 3
```

## <font color="#4bacc6">Let</font>

The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value

Variables declared by "let" have their scope in the block for which they are Declared, as well as in any contained sub-blocks. In this way, let works very Much like var. The main difference is that the scope of a var variable is the entire enclosing function


```js
function varTest() {  
var x = 1;  
{  
var x = 2; // same variable!  
console.log(x); // 2  
}  
console.log(x); // 2}  
function letTest() {  
let x = 1;  
{  
let x = 2; // different variable  
console.log(x); // 2  
}  
console.log(x); // 1}  
```
