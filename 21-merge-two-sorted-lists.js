/**
 * Problem link: https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * 2 linked list: lists are stored in reverse order
 * add each of theirs node and return the sum as a linked list
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 */


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists =  function(list1, list2) {
    let newList = new ListNode();
    let result = newList;

    /**
     * both l1 & l2 present
     * only l1 present
     * only l2 present
     */
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            newList.next = list1;
            list1 = list1.next;
        } else {
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next;
    }

    if (list1) {
        newList.next = list1;
    }

    if (list2) {
        newList.next = list2;
    }

    return result.next;

};


const List1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}

const List2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}

const res = mergeTwoLists(List1, List2);

console.log("result! ", res);
