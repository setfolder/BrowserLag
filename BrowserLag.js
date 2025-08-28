// Make a Browser Lag

// Sometimes you need to pause all other JS and perform a task for a certain period of time.
// The webpage will not perform other tasks and will not respond to user actions.

function Timeout(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // This is where the action is performed for the specified time. Can be left blank.
    }
};
Timeout(10000);  // Perform the task for 10 seconds, blocking the main thread.
