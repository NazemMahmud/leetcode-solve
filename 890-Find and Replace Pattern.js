/**
 * Problem link: https://leetcode.com/problems/find-and-replace-pattern
 * Find and Replace Pattern
 *
 * Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
 * Output: ["mee","aqq"]
 *
 * Input: words = ["a","b","c"], pattern = "a"
 * Output: ["a","b","c"]
 *
 * Solution: String, Index compare, Hashmap is also possible
 */

/**
 * O (N * L)
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    /**
     * It can be solved with Hashmap, but i have solved it comparing indexes (index mapping)
     * each word.length === pattern.length
     */
    const res = [];
    for (const word of words) {
        if (check(word, pattern)) {
            res.push(word);
        }
    }
    return res;
};

var check = function (word, pattern) {
    for (let i=0; i<pattern.length; i++) {
        if (pattern.indexOf(pattern[i]) !== word.indexOf(word[i])) {
            return false;
        }
    }
    return true;
}

const words1 = ["abc","deq","mee","aqq","dkd","ccc"];
const words2 = ["a","b","c"];
console.log("result 1: ", findAndReplacePattern(words1, 'abb'));
console.log("result 2: ", findAndReplacePattern (words2, 'a'));
