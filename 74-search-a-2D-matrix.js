/**
 * Problem link: https://leetcode.com/problems/search-a-2d-matrix
 * 74: Search a 2D Matrix
 *
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 *
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * Output: false
 *
 *
 * Solution: Binary Search, Divide and conquer, Matrix
 */

/**
 * Runtime: 91 ms
 * Memory Usage: 41.8 MB
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    /**
     * If empty matrix, can't find any solution
     * As it is a sorted ordered matrix:
     * If we start from top-right corner:
     * If target value is found in that index, TRUE
     * Else If: matrix[row][col] > target: we need to reduce 1 column. As it is a sorted ordered matrix, so, that column will always have value > target
     * Else If: matrix[row][col] < target: we need to reduce 1 row. As it is a sorted ordered matrix, so, that row will always have value < target
     */
    if(!matrix.length) return false;

    let rows = 0, cols = matrix[0].length-1;

    if (matrix[matrix.length-1][cols] < target || matrix[0][0] > target) return false;

    while(rows < matrix.length && cols >= 0) {
        if(matrix[rows][cols] === target) {
            return true;
        }
        if(matrix[rows][cols] > target) {
            cols--;
        }
        else rows++;
    }

    return false;
}


const matrix =[[1,3,5,7],[10,11,16,20],[23,30,34,60]];

console.log("result 1: ", searchMatrix (matrix, 5));
console.log("result 2: ", searchMatrix (matrix, 13));
