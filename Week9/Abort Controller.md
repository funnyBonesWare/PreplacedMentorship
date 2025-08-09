The **`AbortController`** interface represents a controller object that allows you to abort one or more Web requests as and when desired.

You can create a new `AbortController` object using the AbortController() constructor.

Communicating with an asynchronous operation is done using an AbortSignal object.

## AbortSignal Object

The **`AbortSignal`** interface represents a signal object that allows you to communicate with an asynchronous operation (such as a fetch request) and abort it if required via an AbortController object.

### <font color="#00b050">AbortSignal Properties</font>
#### <font color="#f79646">AbortSignal.aborted</font>
 A Boolean  that indicates whether the request(s) the signal is communicating with is/are aborted (`true`) or not (`false`). it is read only.
#### <font color="#f79646">AbortSignal.reason</font>
A JavaScript value providing the abort reason, once the signal has aborted. it is read only.
 
### <font color="#00b050">AbortSignal Methods</font>
Also inherits methods from their parent "Event target"

#### <font color="#f79646">AbortSignal.abort()</font>
Returns an `AbortSignal` instance that is already set as aborted.

#### <font color="#f79646">AbortSignal.any()</font>
Returns an `AbortSignal` that aborts when any of the given abort signals abort. Similar to how you can use `Promise.race()` to handle multiple promises on a first-come-first-served basis, you can utilize the `AbortSignal.any()` static method to group multiple abort signals into one.

```js
const publicController = new AbortController()

const internalController = new AbortController()

channel.addEventListener('message', handleMessage, {

  signal: AbortSignal.any([publicController.signal, internalController.signal]),

})
```

In the example above, I am introducing _two_ abort controllers. The public one is exposed to the consumer of my code, allowing them to trigger aborts, resulting in the `message` event listener being removed. The internal one, however, allows _me_ to also remove that listener without interfering with the public abort controller.

If any of the abort signals provided to the `AbortSignal.any()` dispatch the abort event, that parent signal will also dispatch the abort event. Any other abort events past that point are ignored.
#### <font color="#f79646">AbortSignal.timeout()</font>
Returns an `AbortSignal` instance that will automatically abort after a specified time.You can use the `AbortSignal.timeout()` static method as a shorthand to create a signal that dispatches the abort event after a certain timeout duration has passed. No need to create an `AbortController` if all you want is to cancel a request after it exceeds a timeout:

```js
async function uploadFile(file: File) {
    const response = await fetch('/upload', {
        method: 'POST',
        body: file,
        signal: AbortSignal.timeout(3000) // timeout signal
    });
    return response;
}
```

- **Start request** — `fetch()` begins sending the file.
    
- **Timer begins** — `AbortSignal.timeout(3000)` starts a 3-second countdown.
    
- **Two possible outcomes:**
    
    - If the upload finishes **before** 3 seconds → `fetch` resolves normally with a `Response` object.
        
    - If the upload takes **longer** than 3 seconds → the signal is aborted, and `fetch` rejects with an `AbortError` (or `TimeoutError` in some browsers).
#### <font color="#f79646">AbortSignal.throwIfAborted()</font>
Throws the signal's abort reason if the signal has been aborted; otherwise it does nothing.


## AbortController()

An Abort Controller is created by instantiating the `AbortController class` as shown below, which gives you an AbortSignal object:

```js
const controller = new AbortController();
```

The `controller` object has a method named `abort()` that can be called to cancel an associated asynchronous task. To associate the controller with an asynchronous operation, you pass its `signal` property as an option when initiating the asynchronous operation. For example, with a `fetch` request, we implement it as shown below:

```js
const controller = new AbortController();
fetch("https://api.example.com/data", {
        signal: controller.signal
    })
    .then((response) => {
        // Process the response
    })
    .catch((error) => {
        //handle aborted request
        if (error.name === "AbortError") {
            console.log("Request was aborted");
        } else {
            //handle other errors
            console.error("Error occurred:", error);
        }
    }
);
```

To cancel the `fetch` request, you can call the `abort()` method on the controller as shown below:

```js
controller.abort();
```

### <font color="#00b050"> Usage</font>

#### <font color="#f79646">1. Event listeners</font>

You can provide an abort `signal` when adding an event listener for it to be automatically removed once the abort happens.
```js
const controller = new AbortController()

window.addEventListener('resize', ()=>{}, { signal: controller.signal })

controller.abort()
```

Calling `controller.abort()` removes the `resize` listener from the window. That is an extremely elegant way of handling event listeners because you no longer need to abstract the listener function just so you can provide it to `.removeEventListener()`.

```js
//old Way
// const listener = () => {}

// window.addEventListener('resize', listener)

// window.removeEventListener('resize', listener)

//New Way

const controller = new AbortController()

window.addEventListener('resize', () => {}, { signal: controller.signal })

controller.abort()
```

An `AbortController` instance is also much nicer to pass around if a different part of your application is responsible for removing the listener.

<font color="#f79646">CATCH / AHA Moment</font>

A great "aha" moment for me was when I realized you can use _a single `signal`_ to remove _multiple_ event listeners!
```js
useEffect(() => {

  const controller = new AbortController()

  window.addEventListener('resize', handleResize, {

    signal: controller.signal,

  })

  window.addEventListener('hashchange', handleHashChange, {

    signal: controller.signal,

  })

  window.addEventListener('storage', handleStorageChange, {

    signal: controller.signal,

  })

  return () => {

    // Calling `.abort()` removes ALL event listeners

    // associated with `controller.signal`. Gone!

    controller.abort()

  }

}, [])
```

In the example above, I'm adding a `useEffect()` hook in React that introduces a bunch of event listeners with different purpose and logic. Notice how in the clean up function I can remove _all of the added listeners_ by calling `controller.abort()` _once_. Neat!

#### <font color="#f79646">2.  Fetch requests</font>

The `fetch()` function supports `AbortSignal` as well! Once the `abort` event on the signal is emitted, the request promise returned from the `fetch()` function will reject, aborting the pending request.

```js
async function  uploadFile(file: File) {

    const controller = new AbortController()

    // Provide the abort signal to this fetch request

    // so it can be aborted anytime be calling `controller.abort()`.

    const response = await fetch('/upload', {

        method: 'POST',

        body: file,

        signal: controller.signal,

    })

    return {
        response,
        controller
    }
}
```


```js
const { response, controller } = await uploadFile(myFile);

// Abort if needed
controller.abort();
```

