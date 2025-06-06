> [!summary] Definition
> A Fibonacci series is a mathematical numbers series that starts with fixed numbers 0 and 1. All the further next numbers can be generated using the sum of the last two numbers.

![[Screenshot 2025-06-06 at 11.47.02 AM.png]]

### <font color="#4bacc6">Get the Fibonacci series up to n terms using for loop</font>

A loop like **for** and **while** can be used to generate the Fibonacci series. We can run a loop from 2 to N, and in each iteration, the sum of the previous two elements is calculated and stored.

So, at the end of the nth iteration, we will have the nth Fibonacci term in front of us.

Let us code the above approach using for loop. Suppose we want to generate the 7th term of the Fibonacci series in JavaScript.

**Implementation:**
```js
function fibonacci(num) {
  // x is representing the first term,
  // y is representing the second term, and
  // z is representing the sum of x and y.
  var x = 0;
  var y = 1;
  var z;
  for (var i = 2; i < num; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  return y;
}

var num = 7;
answer = fibonacci(num);

console.log("The 7th term of the Fibonacci series is: ", answer);
```

**Output:**

```js
The 7th term of the Fibonacci series is:  8
```
### <font color="#4bacc6">Time and Space Complexities</font>

Since we are not storing the vales, the printing of the nth term is taking O(1) time on the other hand, the loop is running for (n-2) times which is equivalent to O(n). So, the overall **time complexity** of the above approach is O(n).

The **space complexity** is O(1) as as we are not taking any extra space(except some variables that takes O(1) space).
### <font color="#4bacc6">Get the Fibonacci series up to n terms using Recursion && Currying</font>

```js
/*
  1) Curried Fibonacci function using classic function declarations.

     - fib(a) returns a function that expects b.
     - That function returns another function that expects n.
     - Calling fib(a)(b)(n) computes the nth Fibonacci number
       assuming a is the 0th term and b is the 1st term.
*/
function fib(a) {
  return function(b) {
    return function(n) {
      // Base case: if n is 0, return the “a” value
      if (n === 0) {
        return a;
      }
      // Base case: if n is 1, return the “b” value
      if (n === 1) {
        return b;
      }
      // Recursive step: advance the pair (a, b) → (b, a + b),
      // and compute the (n - 1)th term of that new pair.
      return fib(b)(a + b)(n - 1);
    };
  };
}

/*
  2) Helper to build an entire Fibonacci series array.

     - generateFibSeries(numTerms) loops from 0 up to numTerms - 1.
     - For each index i, it calls fib(0)(1)(i) to get the ith term.
     - The result is a classic sequence: [0, 1, 1, 2, 3, 5, ...].
*/
function generateFibSeries(numTerms) {
  var series = [];
  for (var i = 0; i < numTerms; i++) {
    // Starting values are 0 (a) and 1 (b)
    series.push(fib(0)(1)(i));
  }
  return series;
}

// --------------------------------------------------
// Example usage:
// --------------------------------------------------
// Generate the first 8 Fibonacci numbers: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(generateFibSeries(8));
```

## <font color="#4bacc6">Step-by-Step Explanation</font>

1. **Currying in three nested functions:**
    
    - `function fib(a) { … }` returns another function that expects `b`.
        
    - That inner function returns yet another function that expects `n`.
        
    - Only when you call all three—`fib(a)(b)(n)`—does the code inside actually execute. Each function “remembers” its own one argument.

2. Base cases (`n === 0` and `n === 1`):
```js
if (n === 0) {
  return a;
}
if (n === 1) {
  return b;
}
```
- If you ask for the 0th Fibonacci term, you already passed it in as `a`.
- If you ask for the 1st term, that’s `b`.
- These checks stop recursion when you’ve reached those starting points.

3. **Recursive step (`return fib(b)(a + b)(n - 1)`):**
- Suppose you want the 5th term with `fib(0)(1)(5)`. Since 5 is neither 0 nor 1, you advance one step:
    
    - The pair `(a, b)` moves to `(b, a + b)`.
        
    - In our example, `(0, 1)` → `(1, 1)`.
        
- Then you call `fib(1)(1)(4)`. Each call reduces `n` by 1, moving forward in the sequence until it hits the base case.
    
- Ultimately, you “peel off” one layer of recursion per step, and when `n` becomes 1 (or 0), you return that value.

3. **Building the full series with `generateFibSeries(numTerms)`:**
    
    - This helper function simply loops `i` from 0 to `numTerms – 1`.
        
    - For each `i`, `fib(0)(1)(i)` computes the ith Fibonacci number.
        
    - Pushing those values into an array yields the familiar sequence starting at 0.

4. **Putting it all together:**
    
    - You have a pure, curried `fib` that can generate any “Fibonacci-like” series if you change the starting pair.
        
    - The helper `generateFibSeries` fixes the classic starting values `(0, 1)` to produce the standard sequence.


### <span style="background:#9254de"><font color="#ffffff">Source: Self Research amongst various articles</font></span>

