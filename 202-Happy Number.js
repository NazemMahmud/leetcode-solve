/**
 * Problem link: https://leetcode.com/problems/happy-number
 * 202-Happy Number
 * Solution: Math
 *
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 * Input: n = 19
 * Output: true
 * Explanation:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 * Input: n = 2
 * Output: false
 *
 * Next: Linked List Cycle
 * Add Digits
 * Ugly Number
 * Sum of Digits of String After Convert
 */

/**
 * My fastest solution
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];

    let hash = new Set();

    while(!hash.has(n)) {
        hash.add(n);
        let s = n.toString()
        n = 0;
        for (let i = 0; i < s.length; i++) {
            n = n + squares[s[i]];
        }

        if (n == 1) {  return true;  }
    }
    return false;
};

/**
 * My 1st solution
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    var getSum = function(n) {
        let sum = 0;
        while(n > 0 ) {
            let num = n % 10;
            sum = sum + (num * num);
            n = Math.floor(n / 10);
        }

        return sum;
    }

    let hash = new Set();
    while(!hash.has(n) && n != 1) {
        hash.add(n);
        n = getSum(n);
    }

    if (n == 1) {  return true;  }
    return false;
};
