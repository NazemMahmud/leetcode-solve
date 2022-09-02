/**
 * Problem link: https://leetcode.com/problems/pascals-triangle
 * 118:  Pascal's Triangle
 *
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * Input: numRows = 1
 * Output: [[1]]
 *
 * Input: root = [0]
 * Output: [0]
 *
 * Solution: Adhoc
 */

 /**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate1 = function(numRows) {
    const result = [];

    for (let i=0; i<numRows ; i++)
    {
        const row = [1];
        for (let j=1; j<i; j++)
        {
            row.push(result[i-1][j-1] + result[i-1][j]);
        }
        if (i) {
            row.push(1);
        }
        result.push(row);
    }

    return result
};

var generate = function(numRows) {
    const result = [];

    for (let i=0; i<numRows ; i++)
    {
        result[i] = [];
        result[i][0] = 1;
        for (let j=1; j<i; j++)
        {
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
        result[i][i] = 1;
    }

    return result;
};


console.log("result 1: ", generate (5));
console.log("result 2: ", generate (1));
