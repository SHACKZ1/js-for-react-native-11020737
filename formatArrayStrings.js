// arrayManipulation.js

// Task 1: Function to process the array
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Task 2: Function to format array strings
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Export the functions for use in other files
module.exports = { processArray, formatArrayStrings };
