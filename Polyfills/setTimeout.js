/**
 * Simple setTimeout Polyfill for Beginners
 * 
 * This is a basic version that shows how setTimeout works.
 * It's designed to be easy to understand and learn from.
 */

// Only create the polyfill if setTimeout doesn't already exist
if (typeof globalThis.setTimeout === 'undefined') {
    
    // Keep track of all our timers
    let timers = {};
    
    // Give each timer a unique number
    let nextTimerId = 1;
    
    /**
     * setTimeout - runs a function after waiting for some time
     * @param {Function} callback - the function to run
     * @param {number} delay - how long to wait (in milliseconds)
     * @returns {number} - a number to identify this timer
     */
    globalThis.setTimeout = function(callback, delay) {
        
        // Make sure we have a function to run
        if (typeof callback !== 'function') {
            throw new Error('setTimeout needs a function as first argument');
        }
        
        // If no delay is given, use 0 (run immediately)
        delay = delay || 0;
        
        // Make sure delay is not negative
        if (delay < 0) {
            delay = 0;
        }
        
        // Create a unique ID for this timer
        let timerId = nextTimerId++;
        
        // Store information about this timer
        timers[timerId] = {
            callback: callback,
            delay: delay,
            startTime: Date.now(),
            isActive: true
        };
        
        // If delay is 0, run the function right away
        if (delay === 0) {
            // Use a tiny delay to make it run after current code finishes
            setTimeout(function() {
                runTimer(timerId);
            }, 1);
        } else {
            // For longer delays, use a simple loop to check time
            checkTime(timerId);
        }
        
        // Return the timer ID so we can cancel it later
        return timerId;
    };
    
    /**
     * clearTimeout - cancels a timer before it runs
     * @param {number} timerId - the ID returned by setTimeout
     */
    globalThis.clearTimeout = function(timerId) {
        
        // Find the timer in our list
        let timer = timers[timerId];
        
        // If we found the timer and it's still active
        if (timer && timer.isActive) {
            
            // Mark it as cancelled
            timer.isActive = false;
            
            // Remove it from our list
            delete timers[timerId];
        }
    };
    
    /**
     * checkTime - checks if it's time to run a timer
     * @param {number} timerId - which timer to check
     */
    function checkTime(timerId) {
        
        // Get the timer from our list
        let timer = timers[timerId];
        
        // If timer doesn't exist or was cancelled, stop checking
        if (!timer || !timer.isActive) {
            return;
        }
        
        // Calculate how much time has passed
        let currentTime = Date.now();
        let timePassed = currentTime - timer.startTime;
        
        // If enough time has passed, run the function
        if (timePassed >= timer.delay) {
            runTimer(timerId);
        } else {
            // If not enough time has passed, check again in a little bit
            setTimeout(function() {
                checkTime(timerId);
            }, 10); // Check every 10 milliseconds
        }
    }
    
    /**
     * runTimer - actually runs the timer function
     * @param {number} timerId - which timer to run
     */
    function runTimer(timerId) {
        
        // Get the timer from our list
        let timer = timers[timerId];
        
        // If timer exists and is still active
        if (timer && timer.isActive) {
            
            // Mark it as not active so it won't run twice
            timer.isActive = false;
            
            // Remove it from our list
            delete timers[timerId];
            
            // Try to run the function
            try {
                timer.callback();
            } catch (error) {
                // If the function has an error, just log it
                console.error('Error in setTimeout callback:', error);
            }
        }
    }
}

