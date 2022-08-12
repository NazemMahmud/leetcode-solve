/**
 * Problem link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
 * Lowest Common Ancestor of a Binary Search Tree
 *
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * Output: 6
 *
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * Output: 2
 *
 * Input: root = [2,1], p = 2, q = 1
 * Output: 2
 *
 * Solution:  Binary Tree
 */

/**
 * O (n) & O(N) soln 1
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    return left && right ? root : left || right;

    // return !left ? right : (!right ? left : root);
};
