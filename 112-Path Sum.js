/**
 * Problem link: https://leetcode.com/problems/path-sum
 * 112: Path Sum
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 *
 * A leaf is a node with no children.
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 * Explanation: The root-to-leaf path with the target sum is shown.
 *
 * Input: root = [1,2,3], targetSum = 5
 * Output: false
 *
 * Easy
 * Solution: Binary Tree, DFS
 */


class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.val = value;
    }
}


/**
 * go to left or right,
 * check in the leaf node, target sum is achieved or not, if achieved TRUE
 * @param root
 * @param targetSum
 */
var hasPathSum = function(root, targetSum)  {
    if (!root) {
        return false;
    }

    if (!root.left && !root.right && targetSum == root.val) {
        return true;
    }

    targetSum = targetSum - root.val;

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
