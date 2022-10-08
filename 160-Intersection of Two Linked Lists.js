/**
 * Problem link: https://leetcode.com/problems/intersection-of-two-linked-lists
 * 160. Intersection of Two Linked Lists
 *
 * The inputs to the judge are given as follows (your program is not given these inputs):
 *
 * intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
 * listA - The first linked list.
 * listB - The second linked list.
 * skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node. // skip/ignore
 * skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node. // skip/ignore
 *
 * Solution: Linked List
 * 80 ms, faster than 99.44%
 * */

/**
 * Next: Minimum Index Sum of Two Lists
 */

// TODO: check this explanation later, i may forget this in future :D

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let listA = headA;
    let listB = headB;
    // if a & b have different len, then we will stop the loop after second iteration
    while(listA != listB) {
        // for the end of first iteration, we just reset the pointer to the head of another linked list
        listA = listA == null ? headB : listA.next;
        listB = listB == null ? headA : listB.next;
    }

    return listA;
};

/**
 * Inputs:
 * Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
 * Output: Intersected at '8'
 * Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
 * From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A;
 * There are 3 nodes before the intersected node in B.
 * - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references.
 * In other words, they point to two different locations in memory,
 * while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
 *
 * Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
 * Output: Intersected at '2'
 * Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
 * From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A;
 * There are 1 node before the intersected node in B.
 *
 * Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
 * Output: No intersection
 * Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0,
 * while skipA and skipB can be arbitrary values.
 * Explanation: The two lists do not intersect, so return null.
 *
 * 3
 * [3]
 * [2,3]
 * 0
 * 1
 *
 * Intersected at '3'
 */
