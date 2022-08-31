/**
 * Problem link: https://leetcode.com/problems/balanced-binary-tree
 * 110. Balanced Binary Tree
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 * Input: root = []
 * Output: true
 *
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
 * recursive
 * @param root
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    var calcHeight = function (node) {
        if (!node) {
            return 0;
        }
        console.log('node: ', node);
        var leftHeight = calcHeight(node.left);
        if (leftHeight == -1) {
            return -1;
        }
        var rightHeight = calcHeight(node.right);
        if (rightHeight == -1) {
            return -1;
        }
        console.log('leftHeight: ', leftHeight);
        console.log('rightHeight: ', rightHeight);
        if ( Math.abs(leftHeight - rightHeight) > 1 ) {
            return -1;
        }
        return Math.max(leftHeight, rightHeight) +  1;
    }
    return calcHeight( root) > -1;
};



const nums = [3,9,20,null,null,15,7];
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log("result 1: ", isBalanced (root));
