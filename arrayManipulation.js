// arrayManipulation.js

// Task 1: Function to process the array
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Export the function for use in other files
module.exports = { processArray };

