/**
 * Problem link: https://leetcode.com/problems/linked-list-cycle
 * 141. Linked List Cycle
 * Given the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
 * Internally, `pos` is used to denote the index of the node that tail's next pointer is connected to.
 * Note that `pos` is not passed as a parameter.
 * Return `true` if there is a cycle in the linked list. Otherwise, return `false`.
 *
 * Solution: Hashing, Floyd’s Cycle Detection Algorithm
 */

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


/**
 * Hashing:
 * Idea: to traverse the given list and insert each encountered node into a set.
 * If the current node already presents in the set (i.e., it is seen before),
 * that means a cycle is present in the list.
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};

/**
 * Floyd’s Cycle Detection Algo: faster
 * @param {ListNode} head
 * @return {boolean}
 */
var floydCycle = function(rootPoint) {
    // let fast = head;
    // while(fast && fast.next) {
    //     head = head.next;
    //     fast = fast.next.next;
    //     if (head == fast) {
    //         return true;
    //     }
    // }


    /**
     * Pseudocode
     * Floyd’s Cycle Finding Algorithm
     * Here, rootPoint is a linked list
     */
    var fast = rootPoint, slow=rootPoint;
    while(fast && fast.next) {
        slow = rootPoint.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }

    return false;
}

const List1 = {
    val: 3,
    next: {
        val: 2,
        next: {
            val: 0,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

List1.next.next.next.next = List1.next.next;

const List2 = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
}

List2.next.next = List2.next;


const List3 = {
    val: 1,
    next: null
}

console.log("result 1: ", hasCycle (List1)); // T
console.log("result 2: ", hasCycle (List2)); // T
console.log("result 3: ", hasCycle (List3)); // F

console.log("result 4: ", floydCycle(List1)); // T
console.log("result 5: ", floydCycle(List2)); // T
console.log("result 6: ", floydCycle(List3)); // F
