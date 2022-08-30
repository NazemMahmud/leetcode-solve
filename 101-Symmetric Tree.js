/**
 * Problem link: https://leetcode.com/problems/symmetric-tree
 * 101: Symmetric Tree
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 * Solution: Binary Tree, DFS, BFS
 */


class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.val = value;
    }
}


/**
 * this is better
 * @param root
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    var checkSymmetric = function (left, right) {
        if (left == null && right == null) {
            return true;
        }
        if ((left == null || right == null) || (left.val != right.val)) {
            return false;
        }

        if (left && right) {
            return checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left) ;
        }
    }

    return checkSymmetric(root.left, root.right);
};


root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.right.left = new Node(4);
root.right.right = new Node(3);
root.left.left = new Node(3);
root.left.right = new Node(4);

// console.log("result 1: ", root);
// console.log("result 1: ", maxDepthBfs (root));
console.log("result 1: ", isSymmetric (root));
