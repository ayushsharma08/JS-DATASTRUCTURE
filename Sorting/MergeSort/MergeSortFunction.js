const merge = require("./MergeFunction.js");

function mergeSort(array) {
    // Base case: If the array has only one element, return it (already sorted)
    if (array.length <= 1) {
        return array;
    }

    // Divide the array into two halves
    const middle = Math.floor(array.length / 2); // Find the middle index
    const left = mergeSort(array.slice(0, middle)); // Recursively sort the left half
    const right = mergeSort(array.slice(middle)); // Recursively sort the right half

    // Merge the sorted halves
    return merge(left, right);
}

module.exports = mergeSort

// Example usage
// const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
// const sortedArray = mergeSort(unsortedArray);
// console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]