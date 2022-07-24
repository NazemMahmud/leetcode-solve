/**
 * Problem link: https://leetcode.com/problems/search-a-2d-matrix-ii
 * Course Schedule II
 *
 * Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
 * Output: true
 *
 * Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
 * Output: false
 *
 * Input: matrix = [[1,4],[2,5]], target=2
 * Output: true
 *
 * Solution: Binary Search, Divide and conquer
 */

/**
 * O (m+n) soln
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


const matrix1 = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
console.log("result 1: ", searchMatrix (matrix1, 5));

const matrix2 = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
console.log("result 2: ", searchMatrix (matrix2, 20));

const matrix3 = [[1,4],[2,5]]
console.log("result 1: ", searchMatrix (matrix3, 2));
