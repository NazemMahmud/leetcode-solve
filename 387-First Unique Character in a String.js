/**
 * Problem link: https://leetcode.com/problems/first-unique-character-in-a-string
 * 387-First Unique Character in a String
 * Solution: hash
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const hash = Array(123).fill(0);

    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i)]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (hash[s.charCodeAt(i)] === 1) {
            return i;
        }
    }

    return -1;
};

console.log('res 1: ', firstUniqChar("leetcode")); // 0
console.log('res 2: ', firstUniqChar("loveleetcode")); // 2
console.log('res 3: ', firstUniqChar("aabb")); // -1
