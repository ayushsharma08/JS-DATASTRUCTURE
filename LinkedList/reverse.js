//reverse a linkedlist
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedlist {
    constructor() {
        this.head = null;

    }

    //reverseMethod
    reverse() {
        let prev = null;
        let currentNode = this.head;
        let temp = null;

        while (currentNode) {
            temp = currentNode.next; // Store the next node
            currentNode.next = prev; // Reverse the link
            prev = currentNode; // Move prev and currentNode one step forward
            currentNode = temp;
        }
        this.head = prev; // Update the head to the new first node

    }
}
