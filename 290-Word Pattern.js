/**
 * Problem link: https://leetcode.com/problems/word-pattern/description
 * 290-Word Pattern
 * Solution: Hash, string
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 *
 * Next: 291. Word Pattern II (M)
 * More challenges: 205. Isomorphic Strings(E)
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const hash ={};
    const str = s.split(" ");
    const len = pattern.length;
    if (len != str.length) { return false; }

    for(let i=0; i<len; i++) {
        if (hash[pattern[i]]) {
            if (hash[pattern[i]] !== str[i]) { return false;}
        } else if(Object.values(hash).indexOf(str[i]) > -1) {
            return false;
        } else {
            hash[pattern[i]] = str[i];
        }
    }

    return true;
};

console.log("result 1: ", wordPattern("abba", "dog cat cat dog")); // true
console.log("result 2: ", wordPattern("abba", "dog dog dog dog")); // false
