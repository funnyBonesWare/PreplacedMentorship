/**
 * Simple Promise.allSettled Polyfill for Beginners
 * 
 * Promise.allSettled waits for all promises to complete (success or failure).
 * It never fails - it always returns results for all promises.
 * It's designed to be easy to understand and learn from.
 */

// Only create the polyfill if Promise.allSettled doesn't already exist
if (typeof Promise !== 'undefined' && !Promise.allSettled) {
    
    /**
     * Promise.allSettled - waits for all promises to complete (success or failure)
     * @param {Array} promises - array of promises to wait for
     * @returns {Promise} - resolves with array of results showing status of each promise
     */
    Promise.allSettled = function(promises) {
        
        // Make sure we have an array of promises
        if (!Array.isArray(promises)) {
            throw new TypeError('Promise.allSettled requires an array');
        }
        
        // If the array is empty, return immediately with empty array
        if (promises.length === 0) {
            return Promise.resolve([]);
        }
        
        // Return a new promise
        return new Promise(function(resolve) {
            
            // Keep track of how many promises have completed
            let completedCount = 0;
            
            // Array to store the results in the same order as input
            let results = new Array(promises.length);
            
            // Go through each promise in the array
            promises.forEach(function(promise, index) {
                
                // Convert non-promise values to promises
                let promiseToHandle = promise;
                if (!(promise instanceof Promise)) {
                    promiseToHandle = Promise.resolve(promise);
                }
                
                // Handle each promise
                promiseToHandle.then(function(result) {
                    
                    // Store successful result
                    results[index] = {
                        status: 'fulfilled',
                        value: result
                    };
                    
                    // Increase the count of completed promises
                    completedCount++;
                    
                    // If all promises are done, resolve with all results
                    if (completedCount === promises.length) {
                        resolve(results);
                    }
                    
                }).catch(function(error) {
                    
                    // Store failed result
                    results[index] = {
                        status: 'rejected',
                        reason: error
                    };
                    
                    // Increase the count of completed promises
                    completedCount++;
                    
                    // If all promises are done, resolve with all results
                    if (completedCount === promises.length) {
                        resolve(results);
                    }
                });
            });
        });
    };
    
    // Tell the user that our polyfill is working
    console.log('Simple Promise.allSettled polyfill loaded!');
}

// Make it available for use in Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise.allSettled;
} 