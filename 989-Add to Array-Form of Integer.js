/**
 * Problem link: https://leetcode.com/problems/add-to-array-form-of-integer
 * 989-Add to Array-Form of Integer
 * Solution: Array, digit sum
 * The array-form of an integer num is an array representing its digits in left to right order.
 *
 * For example, for num = 1321, the array form is [1,3,2,1].
 * Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
 *
 * Next question Next question
 * 990. Satisfiability of Equality Equations - M
 * More challenges
 * 415. Add Strings - E
 */

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let res = [];
    let carry = 0, i = num.length - 1;
    while (i>=0 || k>0 || carry > 0) {
        let digit = i >=0 ? num[i] : 0;
        let sum = digit + carry + (k%10);
        res.unshift(sum%10);
        carry = Math.floor(sum/10);
        k = Math.floor(k/10);
        i--;
    }

    return res;
};


console.log("result 1: ", addToArrayForm([1,2,0,0], 34)); // [1,2,3,4] ;  1200 + 34 = 1234
console.log("result 2: ", addToArrayForm([2,7,4], 181)); // [4,5,5], 274 + 181 = 455
console.log("result 3: ", addToArrayForm([2,1,5],  806)); //[1,0,2,1]
