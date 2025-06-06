**Throttling** originally meant slowing down the rate of fluid flow using an obstruction. In the context of programming, it refers to slowing down a process such that an operation can only be performed at a certain rate.

Throttling is very similar to debouncing. The key difference is that when invocations happen continuously, throttling ensures that the operation is still performed at a certain maximum rate, while debouncing waits indefinitely until the invocations stop for a certain amount of time.

A typical use case of throttling is when synchronizing with another constantly-updating state. Consider a function `onScrolled`, which listens for the `scroll` event. The `scroll` event may fire as often as every pixel scrolled, so the function will be called in very short intervals. If `onScrolled` is computationally expensive, earlier invocations might block later invocations from happening on time, or block other things from executing in the meantime, leading to a noticeable jank. In this case, we can throttle `onScrolled`, such that it can only be called at most once every 10 milliseconds:

1. The first call to `onScrolled` is known as the _leading edge_.
2. For every next call to `onScrolled`, if it is within 10 milliseconds from the first call, it is in the same "batch" as the first call.
3. After 10 milliseconds have elapsed from the first call to `onScrolled`, we have reached the _trailing edge_.

Usually, `onScrolled` is executed once on the leading edge only, although sometimes it might be executed on the trailing edge, or even both edges, depending on the specific use case. If executed on both edges, the throttling implementation usually also ensures that the next leading edge invocation doesn't fire at least 10 milliseconds after the previous trailing edge.

Via throttling, the effect of `onScrolled` is still continuously updated and applied — for example, if it moves another DOM element based on the document's scroll position, that DOM element is still continuously moved while the page is scrolling — but it isn't executed more often than necessary.

Network throttling  means to simulate a slower network connection by only allowing a certain amount of data to be transferred at a time. _Throttling a timer_ means to coarsen the timer's precision such that when reading the timer (such as `Date.now()`) continuously, the timer's value only changes at a certain maximum rate. Both are specific applications of the general concept of throttling.

Throttling is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is said to be throttled with a wait time of X milliseconds, it can only be invoked at most once every X milliseconds. The callback is invoked immediately and cannot be invoked again for the rest of the `wait` duration.

## <font color="#4bacc6">How to Implement Throttling in JavaScript?</font>

There are several ways to implement throttling in JavaScript. One common approach is to use a timer function such as `setTimeout` or difference of time method (old method) to wrap the function being throttled. The timer function can be used to enforce a delay between calls to the throttled function, allowing it to be called only once within the specified time period.

<font color="#f79646">Pictorial Representation</font>
Here you can see that once the function is executed successfully it starts a blocking delay timer which blocks all the clicks. Once the delay is expired it accepts the clicks and executes the function.
![[Throttle.png]]

```js
function throttle(mainFunction, delay) {
  let timerFlag = null; // Variable to keep track of the timer

  // Returning a throttled version 
  return (...args) => {
    if (timerFlag === null) { // If there is no timer currently running
      mainFunction(...args); // Execute the main function 
      timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
        timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
      }, delay);
    }
  };
}
```

### <font color="#4bacc6">Use Case</font>

```js
// Define a function that fetches some data from an API
function fetchData() {
  console.log("Fetching data...");
  // Simulate an API call with a random delay
  setTimeout(() => {
    console.log("Data fetched!");
  }, Math.random() * 1000);
}

// Throttle the fetchData function with a delay of 5000 ms
const throttledFetchData = throttle(fetchData, 5000);

// Add an event listener to the window scroll event that calls the throttledFetchData function
window.addEventListener("scroll", throttledFetchData);
```

In this example, we define a `throttle` function that takes a `callback` and a delay as arguments. The `throttle` function returns a new function that wraps the `callback` with a logic that uses `setTimeout` to create a timer. The timer ensures that the callback is only called once within the `delay` period. If the returned function is called again before the timer expires, it does nothing.

We then define a `fetchData` function that simulates an API call with a random delay. We use the `throttle` function to create a `throttledFetchData` function that has a delay of 5000 ms. We add an event listener to the window scroll event that calls the `throttledFetchData` function.

If you run this code and scroll the page, you will see that the `fetchData` **function is only called once every 5 second, regardless of how fast or slow you scroll.**

## <font color="#4bacc6">Why Use Throttling?</font>

Throttling can improve the performance and user experience of web pages by reducing the number of unnecessary or redundant operations. It can also prevent some issues such as:

- Overloading the server or the browser with too many requests or calculations
- Exceeding the rate limits or quotas of APIs or services
- Wasting bandwidth or resources on operations that are not visible or relevant to the user
- Creating janky or laggy animations or interactions

## <font color="#4bacc6"> Non Tech Example of throttling:</font>

<font color="#f79646">Changing speed of Fan</font>
When changing speed of fan, it takes few seconds to reach at the desired speed. Thus before changing the speed again, we need to wait for few seconds so the fan reaches at a steady state.

## <font color="#4bacc6">When to Use Throttling?</font>

Throttling is suitable for scenarios where you want to limit how often a function can be called, but you don’t want to miss any calls. For example, you might want to use throttling for:

- Fetching data from an API or a database when the user scrolls, resizes, or types
- Updating or animating elements on the page when the user scrolls, resizes, or moves the mouse
- Logging or tracking user actions or events when they occur frequently

## <font color="#4bacc6">Conclusion</font>

Throttling is a technique that limits how often a function can be called in a given period of time. It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations. Throttling can be implemented in JavaScript using timer functions such as setTimeout or setInterval. Throttling is suitable for scenarios where you want to limit how often a function can be called, but you don’t want to miss any calls.