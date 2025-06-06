
**Debouncing**, in the context of programming, means to discard operations that occur too close together during a specific interval, and consolidate them into a single invocation.

Debouncing is very similar to throttling. The key difference is that throttling enforces limits on continuous operations, while debouncing waits for invocations to stop for a specific time to consolidate many noisy invocations into one single invocation.

A typical use case of debouncing is when responding to user input. When the user is typing, no other action should be taken to avoid the UI becoming laggy. When the user pauses typing, we can start processing the input, such as filtering results, giving suggestions, etc. If the function `search` is debounced by 10 milliseconds, it means:

1. The first call to `search` is known as the _leading edge_.
2. For every next call to `search`, if it is within 10 milliseconds from the previous call, it is in the same "batch" as the previous call.
3. 1. After 10 milliseconds have elapsed from the last call to `search`, if no other calls have happened, we have reached the _trailing edge_.

Usually, `search` is executed once on the trailing edge only, although sometimes it might be executed on the leading edge, or even both edges, depending on the specific use case. If executed on both edges, the debouncing implementation usually also ensures that the next leading edge invocation doesn't fire at least 10 milliseconds after the previous trailing edge.

Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.

## <font color="#4bacc6">How to implement debouncing in JavaScript?</font>

There are different ways to implement debouncing in JavaScript, but one common approach is to use a wrapper function that returns a new function that delays the execution of the original function. The wrapper function also keeps track of a timer variable that is used to clear or reset the delay whenever the new function is called.

```js
const debounce = (mainFunction, delay) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer;

  // Return an anonymous function that takes in any number of arguments
  return function (...args) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    clearTimeout(timer);

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};
```

### <font color="#4bacc6">Using wrapping function with debounce</font>

```js
// Define a function called 'searchData' that logs a message to the console
function searchData() {
  console.log("searchData executed");
}

// Create a new debounced version of the 'searchData' function with a delay of 3000 milliseconds (3 seconds)
const debouncedSearchData = debounce(searchData, 3000);

// Call the debounced version of 'searchData'
debouncedSearchData();
```

Now, whenever we call `debouncedSearchData`, it will not execute `searchData`immediately, but wait for 3 seconds. If `debouncedSearchData` is called again within 3 seconds, it will reset the timer and wait for another 3 seconds. Only when 3 seconds have passed without any new calls to `debouncedSearchData`, it will finally execute `searchData`.
## <font color="#4bacc6"> Image Representation</font>


![[Debounce.png]]

The image clearly shows that whenever the function is called again, the setTimeout() gets overwritten.

## <font color="#4bacc6">Here are three simple real life examples of debouncing:</font>

1. **Submit button:**When you click a submit button on a website, it doesn’t send the data immediately, but waits for a few milliseconds to see if you click it again. This way, it prevents accidental double submissions and errors.

2. **Search box:** When you type something in a search box, it doesn’t show suggestions on every keystroke, but waits until you stop typing for a while. This way, it avoids making too many requests to the server and improves the performance and user experience.

## <font color="#4bacc6">Debounce is a good example of closure</font>

A closure is a function having access to the parent scope, even after the parent function has closed.