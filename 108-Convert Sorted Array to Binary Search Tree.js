/**
 * Problem link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 * 108: Convert Sorted Array to Binary Search Tree
 *
 * Solution: Binary Tree, DFS, BFS better
 */


class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.val = value;
    }
}



/**
 * recursive
 * @param nums
 */
var sortedArrayToBST = function(nums) {
    if (!nums) {
        return null;
    }

    var createNode = function (left, right) {
        if (left > right) {
            return null;
        }
        const mid = left + Math.floor((right - left) / 2);
        var node = new TreeNode(nums[mid]);
        node.left = createNode(left, mid - 1);
        node.right = createNode(mid+1, right);
        return node;
    }
    return createNode( 0, nums.length - 1);
};



const nums = [-10,-3,0,5,9];
// root = new Node(3);
// root.left = new Node(9);
// root.right = new Node(20);
// root.right.left = new Node(15);
// root.right.right = new Node(7);

console.log("result 1: ", sortedArrayToBST (nums));
