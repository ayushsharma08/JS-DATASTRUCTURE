// // 1. Using a Set
// function removeDuplicates(arr) {
//     return [...new Set(arr)];

// }

// // Example usage
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
// const set= new Set()
// console.log(set)


// // 2. Using filter Method
// function removeDuplicates(arr) {
//     return arr.filter((value, index, self) => self.indexOf(value) === index);
// }

// // Example usage
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]


// 3. Using reduce Method
// function removeDuplicates(arr) {
//     return arr.reduce((accumulator, current) => {
//         if (!accumulator.includes(current)) {
//             accumulator.push(current);
//         }
//         return accumulator;
//     }, []);
// }

// // Example usage
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]


// 4. Using a Loop
// function removeDuplicates(arr) {
//     const uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArray.includes(arr[i])) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }

// // Example usage
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
