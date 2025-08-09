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



## AbortController()

An Abort Controller is created by instantiating the `AbortController class` as shown below:

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
