
> [!note] Definition
> Memoization in javascript is an optimization technique, to reduce the complexity of the application, runtime of the application, and proper utilization of resources (Time and Memory). The process consists of using an extra space (cache) for the reduction of expensive function calls (a function that recursively calls itself and it has some overlapping problem). By using memoization, we store the values that were calculated in the previously called subproblems. Then if the same subproblem is raised, we again use the stored value which reduces the time complexity as it removes the extra effort to calculate again and again for the same problem.

## <font color="#4bacc6">How Does Memoization Work?</font>

JavaScript Memoization mainly depends on two concepts:

- Closure
- High-order function
### <font color="#f79646">Closure</font>
The Closure is a combination of a function enclosed with its references to the state. A closure allows you access to an outer function's scope from an inner function. In javascript, at the time of function creation, the closure is generated.
### <font color="#f79646">High Order Function</font>
A higher-order function is a type of function that operates on other functions, they either take other functions as arguments or returns them.

## <font color="#4bacc6">Importance of Memoization</font>

- Memoization in javascript is an optimization technique that stores the results of function calls in a temporary data structure and then retrieves the results whenever the stored result is needed in the program. By doing this, the execution time is reduced and the CPU performance is increased
- Using Javascript Memoization we can reduce the time complexity of an application and by which the response time of the webpage will decreases (for eg. API call)

## <font color="#4bacc6">When to Use Memoization?</font>

- When the function is calling itself. i.e. for the recursive functions.
- When the function is pure (a function that returns the same value every time it is called). As if the value is different in each function call, then there will not be any use in storing such value. So, we can't use memoization in javascript when the function is impure.
- When the function is very complex in time(Heavy computation function). In this case, storing the results in a cache will increase the performance by reducing the time complexity, as re-computation for functions will not be performed.

## <font color="#4bacc6">JavaScript Memoization Examples</font>

One of the classic examples of understanding javascript memoization is by understanding the Fibonacci sequence. 

Fibonacci sequence- It is a set of numbers that start with 0 and 1, and the nth number will be the sum of the (n-1)th and the (n-2) element. So, for the calculation of the nth number of the Fibonacci series, we will have to calculate the (n-1)thand the(n-2) number and we will be using the same function to calculate both. (we will be using the same function with the parameter's value changed every time). 

And this recursive calling of the same function with a different parameter will lead to overlapping sub-problems, which are described in the below image.

