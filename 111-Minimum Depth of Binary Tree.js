/**
 * Problem link: https://leetcode.com/problems/minimum-depth-of-binary-tree
 * 111: Minimum Depth of Binary Tree
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 * Input: root = [2,null,3,null,4,null,5,null,6]
 * Output: 5
 *
 * Solution: Binary Tree, BFS
 */


class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.val = value;
    }
}



/**
 * BFS
 * @param root
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    const queue = [root];
    let depth = 1;

    while (queue.length) {
        let size = queue.length;
        while (size) {
            let node = queue.shift();
            size--;
            if (!node.left && !node.right) {
                return depth;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        depth++;
    }

    return depth;
};



const nums = [3,9,20,null,null,15,7];
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log("result 1: ", minDepth (root));
