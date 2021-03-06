var testModule = (function(){
    var counter = 0;

    return {
        incrementCounter: function(){
            return ++counter;
        },
        resetCounter: function(){
            console.log("Counter value prior to reset: " + counter);
            counter = 0;
        }
    };
})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: 1
testModule.resetCounter();