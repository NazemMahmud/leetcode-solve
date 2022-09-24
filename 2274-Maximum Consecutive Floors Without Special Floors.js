/**
 * Problem link: https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors
 * 2274. Maximum Consecutive Floors Without Special Floors
 *
 * Alice manages a company and has rented some floors of a building as office space. Alice has decided some of these floors should be special floors, used for relaxation only.
 * You are given two integers bottom and top, which denote that Alice has rented all the floors from bottom to top (inclusive).
 * You are also given the integer array special, where special[i] denotes a special floor that Alice has designated for relaxation.
 * Return the maximum number of consecutive floors without a special floor.
 *
 * Input: bottom = 2, top = 9, special = [4,6]
 * Output: 3
 * Explanation: The following are the ranges (inclusive) of consecutive floors without a special floor:
 * - (2, 3) with a total amount of 2 floors.
 * - (5, 5) with a total amount of 1 floor.
 * - (7, 9) with a total amount of 3 floors.
 * Therefore, we return the maximum number which is 3 floors.
 *
 * Input: bottom = 6, top = 8, special = [7,6,8]
 * Output: 0
 * Explanation: Every floor rented is a special floor, so we return 0.
 *
 * Solution: Array, Sentinel, Maximum consecutive
 *
 * Next: Longest Consecutive Sequence
 * Maximum Gap
 */

/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
    special.sort((a,b) => a - b);
    special.unshift(bottom-1)
    special.push(top+1)
    let max=0;

    for(let i=0; i<special.length-1; i++) {
        max = Math.max(max, special[i+1] - special[i] - 1);
    }
    return max;
};



console.log("result 1: ", maxConsecutive(2, 9, [4, 6])); // 3
console.log("result 2: ", maxConsecutive(6,8,  [7,6,8])); // [0]
console.log("result 2: ", maxConsecutive(28,50,  [35, 48])); // 12
console.log("result 2: ", maxConsecutive(3,15,  [7, 9, 13])); // 4
