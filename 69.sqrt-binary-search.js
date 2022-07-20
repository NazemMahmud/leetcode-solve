/**
 * Problem link: https://leetcode.com/problems/sqrtx/
 * find sqrt (x)
 * not allowed to use any built-in exponent function or operator
 *
 * Input: x = 4
 * Output: 2
 *
 * Input: x = 8
 * Output: 2 [decimal part is truncated, 2 is returned]
 *
 * Solution: Binary Search
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 1) {return x; }

    let low = 0;
    let high = Math.floor(x/2);

    while (low < high) {
        const mid = low + Math.floor((1+high-low)/2);
        if (Math.floor((x/mid)/mid) < 1) {
            high = mid - 1;
        } else {
            low = mid;
        }
    }

    return low;
};

const res = mySqrt(131);

console.log("result: ", res);
