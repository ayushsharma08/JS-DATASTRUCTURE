const mergeSort = require('../Sorting/MergeSort/MergeSortFunction.js')
//find secod largest number

// 1 method: my mthod(sort the Array(check if array is empty) get the second largest array using the loop from back)

// function findSecondLargest(arr) {
//     const sortedArray = mergeSort(arr); // Sort the array
//     let largest = null;
//     let secondLargest = null;

//     // Loop through the sorted array from the end to the beginning
//     for (let i = sortedArray.length - 1; i >= 0; i--) {
//         if (largest === null || sortedArray[i] !== largest) {
//             if (largest === null) {
//                 largest = sortedArray[i]; // First unique largest value found
//             } else {
//                 secondLargest = sortedArray[i]; // Second unique largest value found
//                 break; // Exit loop once second largest is found
//             }
//         }
//     }

//     return secondLargest; // Return the second largest value
// }

// Example usage
// const numbers = [10, 3, 4, 55, 66, 55, 66, 77, 66, 77];
// const secondLargest = findSecondLargest(numbers);
// console.log(secondLargest); // Output: 15

// Mehod2: Using Math.max and Filtering

// function findSecondLargest(arr) {
//     const uniqueArr = [...new Set(arr)]; // Remove duplicates
//     if (uniqueArr.length < 2) {
//       return null; // Return null if there are less than 2 unique elements
//     }
//     const largestNum = Math.max(...uniqueArr);
//     uniqueArr.splice(uniqueArr.indexOf(largestNum), 1); // Remove the largest number
//     return Math.max(...uniqueArr); // Return the new largest number
//   }

//   // Example usage
//   const numbers = [10, 5, 8, 20, 15, 12, 20];
//   const secondLargest = findSecondLargest(numbers);
//   console.log(secondLargest); // Output: 15

// Method 3: Using sort and Accessing the Second Last Element

// function findSecondLargest(arr) {
//     const uniqueArr = [...new Set(arr)]; // Remove duplicates
//     if (uniqueArr.length < 2) {
//         return null; // Return null if there are less than 2 unique elements
//     }
//     uniqueArr.sort((a, b) => b - a); // Sort the array in descending order
//     return uniqueArr[1]; // Return the second last element
// }

// // Example usage
// const numbers = [10, 5, 8, 20, 15, 12, 20];
// const secondLargest = findSecondLargest(numbers);
// console.log(secondLargest); // Output: 15


