/**
 * Problem link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
 * Lowest Common Ancestor of a Binary Tree
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 *
 * Input: root = [1,2], p = 1, q = 2
 * Output: 1
 *
 * Solution: DFS, Binary Tree
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

    return !left ? right : (!right ? left : root);
};

/**
 * Solution 2: using DFS
 */

var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node) => {
        if (node === null) {
            return null;
        }

        if (node === p || node === q) {
            return node

        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        return left && right ? node : left || right;
    }

    return dfs(root);
};

