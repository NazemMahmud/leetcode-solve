/**
 * Problem link: https://leetcode.com/problems/pascals-triangle-ii
 * 118:  Pascal's Triangle
 *
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 *
 * Solution: Adhoc
 */


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [1];
    for (var i=1; i<=rowIndex ; i++)
    {
        for (var j=i; j>0; j--)
        {
            if (j == i) {
                result[j] = 1;
            } else {
                result[j] = result[j] + result[j - 1];
            }
        }
    }

    return result;
};


console.log("result 1: ", getRow (5));
console.log("result 2: ", getRow (1));
