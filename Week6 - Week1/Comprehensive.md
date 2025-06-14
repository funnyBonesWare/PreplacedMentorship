
### <font color="#4bacc6">Var</font>

The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

#### <font color="#f79646">Function Scope</font>

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

