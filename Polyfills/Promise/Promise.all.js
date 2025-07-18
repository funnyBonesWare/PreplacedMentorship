/**
 * Simple Promise.all Polyfill for Beginners
 * 
 * Promise.all waits for all promises to complete successfully.
 * If any promise fails, the entire operation fails.
 * It's designed to be easy to understand and learn from.
 */

// Only create the polyfill if Promise.all doesn't already exist
if (typeof Promise !== 'undefined' && !Promise.all) {
    
    /**
     * Promise.all - waits for all promises to complete successfully
     * @param {Array} promises - array of promises to wait for
     * @returns {Promise} - resolves with array of results, or rejects if any fail
     */
    Promise.all = function(promises) {
        
        // Make sure we have an array of promises
        if (!Array.isArray(promises)) {
            throw new TypeError('Promise.all requires an array');
        }
        
        // If the array is empty, return immediately with empty array
        if (promises.length === 0) {
            return Promise.resolve([]);
        }
        
        // Return a new promise
        return new Promise(function(resolve, reject) {
            
            // Keep track of how many promises have completed
            let completedCount = 0;
            
            // Array to store the results in the same order as input
            let results = new Array(promises.length);
            
            // Check if any promise has already been rejected
            let hasRejected = false;
            
            // Go through each promise in the array
            promises.forEach(function(promise, index) {
                
                // Convert non-promise values to promises
                let promiseToHandle = promise;
                if (!(promise instanceof Promise)) {
                    promiseToHandle = Promise.resolve(promise);
                }
                
                // Handle each promise
                promiseToHandle.then(function(result) {
                    
                    // If we already rejected, don't do anything
                    if (hasRejected) {
                        return;
                    }
                    
                    // Store the result in the correct position
                    results[index] = result;
                    
                    // Increase the count of completed promises
                    completedCount++;
                    
                    // If all promises are done, resolve with all results
                    if (completedCount === promises.length) {
                        resolve(results);
                    }
                    
                }).catch(function(error) {
                    
                    // If we already rejected, don't do anything
                    if (hasRejected) {
                        return;
                    }
                    
                    // Mark that we have a rejection
                    hasRejected = true;
                    
                    // Reject the entire operation with the first error
                    reject(error);
                });
            });
        });
    };
    
    // Tell the user that our polyfill is working
    console.log('Simple Promise.all polyfill loaded!');
}

// Make it available for use in Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise.all;
} 