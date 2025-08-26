class Component and its life cycle

Functional Component, JSX

useState, useEffect, useRef

Create a basic Dashboard [similar to Flipkart]

link: [https://dummyjson.com/products](https://dummyjson.com/products)


|                                                        |                     |                                                        |                                                                             |
| ------------------------------------------------------ | ------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| **Lifecycle Method**                                   | **Phase**           | **Purpose**                                            | **Function Component Equivalent**                                           |
| **constructor(props)**                                 | Mounting            | Initialize state, bind methods                         | useState()for state initialization                                          |
| **static getDerivedStateFromProps(props, state)**      | Mounting & Updating | Sync state with props                                  | useEffect()to update state based on prop changes                            |
| **render()**                                           | Mounting & Updating | Returns JSX UI                                         | Function component’s direct return of JSX                                   |
| **componentDidMount()**                                | Mounting            | Run side effects after first render (e.g., fetch data) | useEffect(() => { ... }, [])(empty dependency array, runs once on mount)    |
| **shouldComponentUpdate(nextProps, nextState)**        | Updating            | Control if component should re-render                  | React.memo(Component, areEqual)for memoization and skip re-render           |
| **getSnapshotBeforeUpdate(prevProps, prevState)**      | Updating            | Capture info before DOM updates                        | Can be emulated withuseRef()anduseEffect()prior to DOM updates              |
| **componentDidUpdate(prevProps, prevState, snapshot)** | Updating            | Run side effects after updates                         | useEffect(() => { ... }, [dependencies])to respond to updates               |
| **componentWillUnmount()**                             | Unmounting          | Cleanup before component removal (timers, listeners)   | Return a cleanup function fromuseEffect(() => { return () => { ... } }, []) |