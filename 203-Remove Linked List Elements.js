/**
 * Problem link: https://leetcode.com/problems/remove-linked-list-elements
 * 203. Remove Linked List Elements
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 *
 * Solution: Linked List
 *
 * Next: Delete Node in a Linked List (Medium)
 * Delete the Middle Node of a Linked List (Medium)
 */

/**
 * Note: for linked list, try recursion, it will reduce time
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) { return null; }

    if (head.val == val) {
        return removeElements(head.next, val);
    }

    head.next = removeElements(head.next, val);
    return head;
};

var removeElements2 = function(head, val) {
    if(!head) { return null; }

    while(head) {
        if(head.val == val) {
            head = head.next;
        } else {
            break;
        }
    }

    var list = head;
    while(list && list.next) {
        if(list.next.val == val) {
            list.next = list.next.next;
        } else {
            list = list.next;
        }
    }

    return head;
};

/**
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 * Input: head = [], val = 1
 * Output: []
 *
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 */
