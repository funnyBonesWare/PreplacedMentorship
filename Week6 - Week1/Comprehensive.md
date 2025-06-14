
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


