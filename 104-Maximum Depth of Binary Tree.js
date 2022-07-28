/**
 * Problem link: https://leetcode.com/problems/maximum-depth-of-binary-tree
 * 104: Maximum Depth of Binary Tree
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 * Input: root = [1,null,2]
 * Output: 2
 *
 * Solution: Binary Tree, DFS, BFS better
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
var maxDepthBfs = function(root) {
    if (!root) {
        return 0;
    }

    const queue = [];
    let depth = 0;
    queue.push(root);

    while (queue.length) {
        depth++;
        let size = queue.length;
        while (size) {
            size--;
            const item = queue.shift();
            if (item.left) {
                queue.push(item.left);
            }
            if (item.right) {
                queue.push(item.right);
            }
        }
    }
    return depth;
};

/**
 * this takes too much time
 * @param root
 * @returns {number}
 */
var maxDepthDfs = function(root) {
    if (root == null) {
        return 0;
    }

    return Math.max(maxDepthDfs(root.left), maxDepthDfs(root.right)) +  1;
};

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

// console.log("result 1: ", root);
// console.log("result 1: ", maxDepthBfs (root));
console.log("result 1: ", maxDepthDfs (root));
