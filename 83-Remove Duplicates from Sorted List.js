/**
 * Problem link: https://leetcode.com/problems/remove-duplicates-from-sorted-list
 * 83: Remove Duplicates from Sorted List
 *
 * sorted linked list: remove duplicate
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) {
        return head;
    }

    var result = head;

    while(result) {
        if (result.next && result.val == result.next.val) {
            result.next = result.next.next;
        }
        else { result = result.next }
    }

    return head;

};


const List1 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
}


console.log("result! ",  deleteDuplicates(List1));
