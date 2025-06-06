> [!summary] Definition
> The factorial of a non-negative integer is the product of all positive integers less than or equal to that number. It’s denoted by “n!” where n is the integer. Here are the various methods to find the factorial of a number in JavaScript.

### <font color="#4bacc6">Logic</font>

```js
x!= x*(x-1)*(x-2)*(x-3)......*1
```

> [!note] Note
> Factorials of negative numbers are not defined as only positive numbers including 0 are defined in the domain of factorials.
> i.e -1! Is not possible.
> 0! Is equal to 1

## <font color="#4bacc6">Using Iteration</font>

This method uses a [simple loop](https://www.geeksforgeeks.org/javascript-for-loop/) to calculate the factorial. It is simple and easy to understand.

```js
function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(fact(5));
```

**Output** : 120
### <font color="#4bacc6">Using Recursion</font>

The recursion involves a function that calls itself until it reaches a base condition. It is elegant but can be less efficient for large numbers.

```js
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}
console.log(fact(5));
```

**Output** : 120
### <font color="#4bacc6">Using Currying</font>

In a curried version, `fact(n)` doesn’t itself return the final number; instead, it returns a _function_ that, when you call it, actually performs the recursion. This lets you split the invocation into two steps:
- First: `fact(5)` → returns some inner function `compute`
- Second: `compute()` → finally returns `120`.
So you end up calling `fact(5)()` to get the result. It seems like an extra step, but it illustrates how you can separate “supplying the initial value” from “running the computation.”

```js
/**
 * Curried factorial function:
 * - Calling fact(n) returns an inner function.
 * - You then invoke that returned function (with empty parentheses)
 *   to actually run the recursion and get the numeric result.
 */
function fact(n) {
  // Return a function that, when called, does the actual recursion
  return function compute() {
    // Base case: if n is 0 or 1, factorial is 1
    if (n <= 1) {
      return 1;
    }
    // Otherwise, multiply n by the factorial of (n - 1).
    // Note: fact(n - 1) itself returns a function, so we call it with ().
    return n * fact(n - 1)();
  };
}

// Usage examples:
const step1 = fact(5);      // step1 is now the inner function compute()
// At this point, nothing has been calculated yet—just returned a function.
const result = step1();          // now we actually compute 5 * 4 * 3 * 2 * 1 = 120
console.log(result);             // 120

// Or, more concisely:
console.log(fact(6)());     // directly prints 720
console.log(fact(0)());     // prints 1 (by definition)
```

### Explanation of key lines

1. `function fact(n) { return function compute() { … } };`
    - When you call `fact(5)`, JavaScript sets `n = 5` and then returns the inner function named `compute`. At this moment, no multiplication has happened yet. It’s only storing `n` in a closure.
2. Inside `compute()`:
```js
if (n <= 1) {
  return 1;
 }
 return n * factorial(n - 1)();
```
3. 
4. 4

