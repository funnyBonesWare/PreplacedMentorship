/**
 * Simple Promise.any Polyfill for Beginners
 * 
 * Promise.any waits for the first promise to succeed.
 * If all promises fail, it fails with an AggregateError.
 * It's designed to be easy to understand and learn from.
 */

// Only create the polyfill if Promise.any doesn't already exist
if (typeof Promise !== 'undefined' && !Promise.any) {
    
    /**
     * Promise.any - waits for the first promise to succeed
     * @param {Array} promises - array of promises to wait for
     * @returns {Promise} - resolves with first successful result, or rejects if all fail
     */
    Promise.any = function(promises) {
        
        // Make sure we have an array of promises
        if (!Array.isArray(promises)) {
            throw new TypeError('Promise.any requires an array');
        }
        
        // If the array is empty, reject immediately
        if (promises.length === 0) {
            return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }
        
        // Return a new promise
        return new Promise(function(resolve, reject) {
            
            // Keep track of how many promises have failed
            let failedCount = 0;
            
            // Array to collect all the errors
            let errors = [];
            
            // Check if any promise has already succeeded
            let hasResolved = false;
            
            // Go through each promise in the array
            promises.forEach(function(promise, index) {
                
                // Convert non-promise values to promises
                let promiseToHandle = promise;
                if (!(promise instanceof Promise)) {
                    promiseToHandle = Promise.resolve(promise);
                }
                
                // Handle each promise
                promiseToHandle.then(function(result) {
                    
                    // If we already resolved, don't do anything
                    if (hasResolved) {
                        return;
                    }
                    
                    // Mark that we have a success
                    hasResolved = true;
                    
                    // Resolve with the first successful result
                    resolve(result);
                    
                }).catch(function(error) {
                    
                    // If we already resolved, don't do anything
                    if (hasResolved) {
                        return;
                    }
                    
                    // Store the error
                    errors[index] = error;
                    
                    // Increase the count of failed promises
                    failedCount++;
                    
                    // If all promises have failed, reject with AggregateError
                    if (failedCount === promises.length) {
                        reject(new AggregateError(errors, 'All promises were rejected'));
                    }
                });
            });
        });
    };
    
    // Tell the user that our polyfill is working
    console.log('Simple Promise.any polyfill loaded!');
}

// Make it available for use in Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise.any;
} 