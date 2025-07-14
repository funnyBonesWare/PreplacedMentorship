/**
 * Simple setInterval Polyfill for Beginners
 * 
 * This is a basic version that shows how setInterval works.
 * It's designed to be easy to understand and learn from.
 */

// Only create the polyfill if setInterval doesn't already exist
if (typeof globalThis.setInterval === 'undefined') {
    
    // Keep track of all our intervals
    let intervals = {};
    
    // Give each interval a unique number
    let nextIntervalId = 1;
    
    /**
     * setInterval - runs a function repeatedly after waiting for some time
     * @param {Function} callback - the function to run
     * @param {number} delay - how long to wait between each run (in milliseconds)
     * @returns {number} - a number to identify this interval
     */
    globalThis.setInterval = function(callback, delay) {
        
        // Make sure we have a function to run
        if (typeof callback !== 'function') {
            throw new Error('setInterval needs a function as first argument');
        }
        
        // If no delay is given, use 0 (run immediately and repeatedly)
        delay = delay || 0;
        
        // Make sure delay is not negative
        if (delay < 0) {
            delay = 0;
        }
        
        // Create a unique ID for this interval
        let intervalId = nextIntervalId++;
        
        // Store information about this interval
        intervals[intervalId] = {
            callback: callback,
            delay: delay,
            lastRunTime: Date.now(),
            isActive: true
        };
        
        // Start running the interval
        runInterval(intervalId);
        
        // Return the interval ID so we can stop it later
        return intervalId;
    };
    
    /**
     * clearInterval - stops an interval from running
     * @param {number} intervalId - the ID returned by setInterval
     */
    globalThis.clearInterval = function(intervalId) {
        
        // Find the interval in our list
        let interval = intervals[intervalId];
        
        // If we found the interval and it's still active
        if (interval && interval.isActive) {
            
            // Mark it as stopped
            interval.isActive = false;
            
            // Remove it from our list
            delete intervals[intervalId];
        }
    };
    
    /**
     * runInterval - runs the interval function and schedules the next run
     * @param {number} intervalId - which interval to run
     */
    function runInterval(intervalId) {
        
        // Get the interval from our list
        let interval = intervals[intervalId];
        
        // If interval doesn't exist or was stopped, don't run it
        if (!interval || !interval.isActive) {
            return;
        }
        
        // Try to run the function
        try {
            interval.callback();
        } catch (error) {
            // If the function has an error, just log it
            console.error('Error in setInterval callback:', error);
        }
        
        // Update the last run time
        interval.lastRunTime = Date.now();
        
        // If the interval is still active, schedule the next run
        if (interval.isActive) {
            
            // If delay is 0, run again immediately
            if (interval.delay === 0) {
                // Use a tiny delay to prevent blocking
                setTimeout(function() {
                    runInterval(intervalId);
                }, 1);
            } else {
                // For longer delays, wait and then run again
                setTimeout(function() {
                    runInterval(intervalId);
                }, interval.delay);
            }
        }
    }
    
    // Tell the user that our polyfill is working
    console.log('Simple setInterval polyfill loaded!');
}

// Make it available for use in Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = globalThis.setInterval;
}
