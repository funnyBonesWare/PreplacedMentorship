
function myRace(promises) {
    
    // Make sure we have an array of promises
    if (!Array.isArray(promises)) {
        throw new TypeError('myRace requires an array');
    }
    
    // If the array is empty, the promise will never resolve
    if (promises.length === 0) {
        return new Promise(function() {
            // This promise will never resolve or reject
        });
    }
    
    // Return a new promise
    return new Promise(function(resolve, reject) {
        
        // Check if any promise has already completed
        let hasCompleted = false;
        
        // Go through each promise in the array
        promises.forEach(function(promise, index) {
            
            // Convert non-promise values to promises
            let promiseToHandle = promise;
            if (!(promise instanceof Promise)) {
                promiseToHandle = Promise.resolve(promise);
            }
            
            // Handle each promise
            promiseToHandle.then(function(result) {
                
                // If we already completed, don't do anything
                if (hasCompleted) {
                    return;
                }
                
                // Mark that we have completed
                hasCompleted = true;
                
                // Resolve with the first successful result
                resolve(result);
                
            }).catch(function(error) {
                
                // If we already completed, don't do anything
                if (hasCompleted) {
                    return;
                }
                
                // Mark that we have completed
                hasCompleted = true;
                
                // Reject with the first error
                reject(error);
            });
        });
    });
}
