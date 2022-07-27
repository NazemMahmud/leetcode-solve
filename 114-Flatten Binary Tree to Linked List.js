/**
 * Problem link: https://leetcode.com/problems/flatten-binary-tree-to-linked-list
 * 114: Flatten Binary Tree to Linked List
 *
 * Input: root = [1,2,5,3,4,null,6]
 * Output: [1,null,2,null,3,null,4,null,5,null,6]
 *
 * Input: root = []
 * Output: []
 *
 * Input: root = [0]
 * Output: [0]
 *
 * Solution: Binary Tree, DFS, Morris Algorithm, Stack, Linked List, Tree
 */

/**
 * Runtime: 95 ms
 * Memory Usage: 45.1 MB
 */

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.val = value;
    }
}

/**
 * Solution 1: Traverse from bottom i.e. shift one by one into linked list from bottom
 * head.shift(6): 6
 * head.shift(5) : 5 6
 * head.shift(4) : 4 5 6
 * ...
 * 1 2 3 4 5 6
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let head = null, curr = root
    while (head != root) {
        if (curr.right === head) {
            curr.right = null;
        }
        if (curr.left === head) {
            curr.left = null;
        }
        if (curr.right) {
            curr = curr.right;
        }
        else if (curr.left) {
            curr = curr.left;
        }
        else {
            curr.right = head; head = curr;
            curr = root;
        }
    }
};

/**
 * Solution 2: Morris traversal
 * Insertion process:
 * 4 -> R [ 5 6 ] ---> 2 ->[L 3, R [4 R [5 6]]]
 * 3 -> R [4 R [5 6]] --> 2 ->[Null, [3 -> L , R [[4 R [5 6]]]]
 * @param root
 */
var morrisTraversal = function (root) {
    let next = root;
    while (next) {
        if (next.left) {
            let current = next.left;
            while (current.right) {
                current = current.right;
            }
            current.right = next.right;
            next.right = next.left;
            next.left = null;
        }
        next = next.right;
    }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(6);

console.log("result 1: ", morrisTraversal (root));
// console.log("result 1: ", flatten (root));
