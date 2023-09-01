/**
 *
 * Problem link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description
 * 3. Longest Substring Without Repeating Characters
 * 2 type of solutions, frequency counter, sliding window
 * Solution description: /3-Longest-Substring-Without-Repeating-Characters.md
 */

/**
 * Problem:
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Constraints:
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let set = new Set();
    let left = 0;
    let maxSize = 0;
    for(let i = 0; i < s.length;  i++) {
        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }

        maxSize = Math.max(maxSize, i - left + 1);
        set.add(s[i]);
    }

    return maxSize;
};

console.log('res 1: ', lengthOfLongestSubstring('abcabcbb')); // Output: 3 -- Explanation: The answer is "abc", with the length of 3.
console.log('res 2: ', lengthOfLongestSubstring('bbbbb')); // Output: 3 -- Explanation:he answer is "b", with the length of 1.
console.log('res 3: ', lengthOfLongestSubstring('pwwkew')); // Output: 3 -- Explanation: The answer is "wke", with the length of 3.

// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
