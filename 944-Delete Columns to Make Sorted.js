/**
 * Problem link: https://leetcode.com/problems/delete-columns-to-make-sorted
 * 944-Delete Columns to Make Sorted.js
 * Solution: Array, String, Adhoc
 * given an array of n strings strs, all of the same length.
 * The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:
 * abc
 * bce
 * cae
 * You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted
 * while column 1 ('b', 'c', 'a') is not, so you would delete column 1.
 *
 * Return the number of columns that you will delete.
 *
 * Next question 945. Minimum Increment to Make Array Unique (M)
 * More challenges
 * 1681. Minimum Incompatibility (H)
 * 1631. Path With Minimum Effort (M)
 * 1139. Largest 1-Bordered Square (M)
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const row = strs.length;
    const col = strs[0].length;
    let count = 0;
    for(let i=0; i<col; i++) {
        for(let j=0; j<row-1; j++) {
            if (strs[j][i] > strs[j+1][i]) {
                count++;
                break;
            }
        }
    }
    return count;
};


console.log("result 1: ", minDeletionSize(["cba","daf","ghi"])); // 1
console.log("result 2: ", minDeletionSize(["a","b"])); // 0
console.log("result 3: ", minDeletionSize(["zyx","wvu","tsr"])); // 3
