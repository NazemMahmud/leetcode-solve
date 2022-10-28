/**
 * Problem link: https://leetcode.com/problems/power-of-three
 * 326-Power of Three
 * Solution: Math
 *
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 *
 * Next: Power of Four - E
 * Check if Number is a Sum of Powers of Three - M
 */

/**
 * 331 ms, faster than 73.39%
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    const powers = [];
    for (let i = 0; i<20; i++) {
        powers[i] = Math.pow(3, i);
    }

    if(powers.includes(n)) { return true; }
    return false;

};

/**
 * 407 ms
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThreeLoop = function(n) {
    if (n == 0) {
        return false;
    }

    while (n % 3 == 0 ) {
        n = Math.floor(n / 3);
    }
    if (n == 1) { return true; }
    return false
};

/**
 * 411 ms
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThreeMath = function(n) {
    if ((Math.log10(n) / Math.log10(3)) % 1 == 0 ) {
        return true;
    }

    return false
};

