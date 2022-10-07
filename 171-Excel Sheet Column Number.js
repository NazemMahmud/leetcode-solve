/**
 * Problem link: https://leetcode.com/problems/excel-sheet-column-number
 * 171. MExcel Sheet Column Number
 * Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 */

 /**
  * Solution Explain:
  * A = 1
  * AA = 26*1+ 1 = 27 (A == 1)
  * AB = 26*1+ 2 = 28 (B == 2)
  * AC = 26*1 + 3 = 29 (C == 3)
  * B = 2
  * BC = 26 * 2 + 3
  * BCM = ((26 * 2) + 3) * 26 + 13
  **/


/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    /**
     * Note: We need number between [1-26], where [A-Z]
     * 'A'.charCodeAt(0) = 65, ASCII value of A
     * so, 65 - 1 = 64, this is used as base code
     * so, for Z, Z = ASCII(Z) - 64 = 90 - 64 = 26
     */
    const len = columnTitle.length;
    let res = 0;
    for(let i = 0; i<len; i++) {
        res = res * 26 + (columnTitle[i].charCodeAt(0) - 64);
    }
    return res;
};

console.log("result 1: ", titleToNumber("A")); // 1
console.log("result 2: ", titleToNumber("AB")); // 28
console.log("result 3: ", titleToNumber("ZY")); // 701
console.log("result 4: ", titleToNumber("VXCZA")); // 10478001
