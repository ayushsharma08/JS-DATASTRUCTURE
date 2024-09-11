class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function detectCycle(head) {
    if (head === null || head.next === null) {
        return false;  // No cycle detected
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;  // Cycle detected
        }
    }

    return false;  // No cycle detected
}