class TreeNode {
    constructor(value) {
        this.value = value; // Node value
        this.left = null;   // Left child
        this.right = null;  // Right child
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // Root of the BST
    }

    // Insert a new value into the BST
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode; // If the tree is empty, set the new node as root
            return;
        }
        this.insertNode(this.root, newNode); // Recursively insert the new node
    }

    // Helper method to insert a node
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // Go to the left subtree
            if (!node.left) {
                node.left = newNode; // Insert here if no left child
            } else {
                this.insertNode(node.left, newNode); // Recur down the left subtree
            }
        } else {
            // Go to the right subtree
            if (!node.right) {
                node.right = newNode; // Insert here if no right child
            } else {
                this.insertNode(node.right, newNode); // Recur down the right subtree
            }
        }
    }

    // Search for a value in the BST
    search(value) {
        return this.searchNode(this.root, value); // Start searching from the root
    }

    // Helper method to search for a node
    searchNode(node, value) {
        if (!node) {
            return false; // Base case: not found
        }
        if (value < node.value) {
            return this.searchNode(node.left, value); // Search in the left subtree
        } else if (value > node.value) {
            return this.searchNode(node.right, value); // Search in the right subtree
        } else {
            return true; // Value found
        }
    }

    // Delete a value from the BST
    delete(value) {
        this.root = this.deleteNode(this.root, value); // Start deletion from the root
    }

    // Helper method to delete a node
    deleteNode(node, value) {
        if (!node) {
            return null; // Base case: not found
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value); // Recur down the left subtree
            return node;
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value); // Recur down the right subtree
            return node;
        } else {
            // Node with only one child or no child
            if (!node.left) {
                return node.right; // Replace with right child
            } else if (!node.right) {
                return node.left; // Replace with left child
            }

            // Node with two children: get the inorder successor (smallest in the right subtree)
            let tempNode = this.findMinNode(node.right);
            node.value = tempNode.value; // Copy the inorder successor's value to this node
            node.right = this.deleteNode(node.right, tempNode.value); // Delete the inorder successor
            return node;
        }
    }

    // Helper method to find the minimum node in a subtree
    findMinNode(node) {
        while (node.left) {
            node = node.left; // Keep going left
        }
        return node; // Return the minimum node
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(node, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result); // Visit left subtree
            result.push(node.value); // Visit node
            this.inOrderTraversal(node.right, result); // Visit right subtree
        }
        return result; // Return the result array
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

console.log("In-order Traversal:", bst.inOrderTraversal(bst.root)); // Output: [3, 5, 7, 10, 12, 15, 18]

console.log("Search for 7:", bst.search(7)); // Output: true
console.log("Search for 20:", bst.search(20)); // Output: false

bst.delete(10); // Delete the root node
console.log("In-order Traversal after deleting 10:", bst.inOrderTraversal(bst.root)); // Output: [3, 5, 7, 12, 15, 18]