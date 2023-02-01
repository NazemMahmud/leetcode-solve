/**
 * Problem link: https://leetcode.com/problems/greatest-common-divisor-of-strings
 * 1071-Greatest Common Divisor of Strings
 * Solution: String, GCD
 *
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 *
 * Next question
 * 1072. Flip Columns For Maximum Number of Equal Rows - m
 * More challenges
 * 1979. Find Greatest Common Divisor of Array - e
 * 2413. Smallest Even Multiple - e
 */


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1.length < str2.length) {
        return gcdOfStrings(str2, str1);
    }
    if (!str2) {
        return str1;
    }
    if (str1.substring(0, str2.length) !== str2) {
        return "";
    }
    return gcdOfStrings(str1.substring(str2.length), str2);
};


console.log('res 1: ', gcdOfStrings("ABCABC",  "ABC")); // "ABC"
console.log('res 2: ', gcdOfStrings("ABABAB", "ABAB")); // "AB"
console.log('res 3: ', gcdOfStrings("LEET",  "CODE")); // ""


