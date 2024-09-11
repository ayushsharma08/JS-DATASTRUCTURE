function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // Move to the next element in the left array
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // Move to the next element in the right array
        }
    }

    // Concatenate the remaining elements from either left or right (if any)
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}
module.exports = merge;