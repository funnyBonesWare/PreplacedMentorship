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
