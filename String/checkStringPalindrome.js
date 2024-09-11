function isPalindrome(string) {
    // Step 1: Normalize the string
    let normalizedString = "";

    // Loop through each character in the string
    for (let character of string) {
        // Check if the character is alphanumeric
        if (/[a-zA-Z0-9]/.test(character)) {
            // Convert to lowercase and append to normalizedString
            normalizedString += character.toLowerCase();
        }
    }

    // Step 2: Initialize pointers
    let left = 0;
    let right = normalizedString.length - 1;

    // Step 3: Compare characters
    while (left < right) {
        if (normalizedString[left] !== normalizedString[right]) {
            return false; // Not a palindrome
        }
        left += 1; // Move left pointer to the right
        right -= 1; // Move right pointer to the left
    }

    // Step 4: Completion Check
    return true; // Is a palindrome
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("No 'x' in Nixon")); // Output: true