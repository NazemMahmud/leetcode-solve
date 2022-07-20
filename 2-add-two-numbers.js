/**
 * Problem link: https://leetcode.com/problems/add-two-numbers/
 *
 * 2 linked list: lists are stored in reverse order
 * add each of theirs node and return the sum as a linked list
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    var sum = 0;
    var tmp = new ListNode();
    var result = tmp;

    while(l1 || l2) {
        let a = 0;
        let b = 0;
        if (l1.val) { a = l1.val; }
        if (l2.val) { b = l2.val; }

        sum = a + b + carry;
        carry = 0;
        if  (sum > 9) {
            carry = 1;
            sum = sum % 10;
        }


        tmp.next = new ListNode(sum);
        tmp = tmp.next;

        l1 = (l1.next) ? l1.next : 0;
        l2 = (l2.next) ? l2.next : 0;
    }

    if (carry > 0) {
        tmp.next = new ListNode(carry);
    }

    return result.next;

};
