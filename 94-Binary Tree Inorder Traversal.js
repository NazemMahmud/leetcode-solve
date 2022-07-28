/**
 * Problem link: https://leetcode.com/problems/binary-tree-inorder-traversal/
 * 94: Binary Tree Inorder Traversal
 *
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 *
 * Input: root = []
 * Output: []
 *
 * Input: root = [1]
 * Output: [1]
 *
 * Solution: Binary Tree, Inorder traverse, (also can be solved using stack)
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 *
 * 77 ms 42.5 MB
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};
